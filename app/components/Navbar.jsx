"use client";

import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { auth } = useAuth();
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    if (auth) {
      setClientName(auth.name);
    }
  }, [auth]);

  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Eventry"
              width={135}
              height={135}
              style={{
                width: "auto",
              }}
              priority
            ></Image>
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          {clientName && <li>{clientName}</li>}
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
