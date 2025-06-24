import React from "react";
import Card from "./card";
import Tabs from "./leadershipTab";

const Feature = () => {
  const CardDetails = [
    {
      heading: "Enter Classroom",
      details:
        "Select a course and start your journey Select a course and start your journey",
      btnText: "Go To a Class",
      link: "/class",
    },
    {
      heading: "Take Applitude Test",
      details:
        "Select a course and start your journey Select a course and start your journey",
      btnText: "Start Test",
      link: "/Test",
    },
    {
      heading: "Chat with ScaleAI",
      details:
        "Select a course and start your journey Select a course and start your journey",
      btnText: "Chat Ai",
      link: "/ai",
    },
    {
      heading: "Enter Classroom",
      details:
        "Select a course and start your journey Select a course and start your journey",
      btnText: "Go To a Class",
      link: "/class",
    },
  ];
  return (
    <div className=" w-full flex md:flex-row flex-col justify-between items-end md:gap-30 gap-20 ">
      {/* <div className="  flex flex-row flex-wrap gap-5 w-full"> */}
      <div className="  grid md:grid-cols-2 grid-cols-1 gap-5 w-full mg:wmin-w-[400px]">
        {CardDetails.map((cardDetail, idx) => (
          <Card
            key={idx}
            heading={cardDetail.heading}
            details={cardDetail.details}
            btnText={cardDetail.btnText}
            link={cardDetail.link}
          />
        ))}
      </div>
      <div className="mx-auto w-full md:w-auto">
        <Tabs />
      </div>
    </div>
  );
};

export default Feature;
