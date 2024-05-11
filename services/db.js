import { eventModel } from "@/models/event.models";
import { userModel } from "@/models/user.models";
import { replaceMongoIdInObject } from "@/utils/data-util";
import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "eventry",
    });
    console.log("Connected");
    return conn;
  } catch (err) {
    console.log(err);
  }
};

export const findUserByCredentials = async (credentials) => {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
};

export const createUser = async (user) => {
  return await userModel.create(user);
};

export const updateInterest = async (eventId, authId) => {
  const event = await eventModel.findById(eventId);

  if (event) {
    const foundUsers = event.interested_ids.find(
      (id) => id.toString() === authId
    );

    if (foundUsers) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }

    event.save();
  }
};
