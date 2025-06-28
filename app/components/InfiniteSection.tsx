import React from "react";
import { InfiniteMovingCards } from "./hooks/InfiniteMovingCards";
import Image from "next/image";
import logo from "../imgs/nearlogo.png";
import logo2 from "../imgs/filelogo.png";

export default function InfiniteSection() {
  const logos = [
    {
      id: 1,
      image: <Image src={logo} alt="" />,
    },
    {
      id: 2,
      image: <Image src={logo2} alt="" />,
    },
    {
      id: 3,
      image: <Image src={logo} alt="" />,
    },
    {
      id: 4,
      image: <Image src={logo2} alt="" />,
    },
    {
      id: 5,
      image: <Image src={logo} alt="" />,
    },
    {
      id: 6,
      image: <Image src={logo2} alt="" />,
    },
    {
      id: 8,
      image: <Image src={logo} alt="" />,
    },
  ];
  return (
    <div className="px-30 py-20">
      <InfiniteMovingCards items={logos} />
    </div>
  );
}
