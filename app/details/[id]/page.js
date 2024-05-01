import HeroSection from "@/app/components/details/HeroSection";
import EventDetails from "@/app/components/details/EventDetails";
import EventVenue from "@/app/components/details/EventVenue";

import { getEventById } from "@/actions/event";

const EventDetailsPage = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);

  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails
            details={eventInfo?.details}
            swags={eventInfo?.swags}
          />
          <EventVenue location={eventInfo?.location} />
        </div>
      </section>
    </>
  );
};

export default EventDetailsPage;
