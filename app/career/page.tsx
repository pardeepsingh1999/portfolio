import { Navigation } from "../components/nav";
import React from "react";
import { Card } from "../components/card";

const Career = () => {
  const careers = [
    {
      companyName: "Logic Square Technologies",
      designation: "Senior Software Engineer",
      startDate: "September, 2020",
      endDate: "Present",
    },
    {
      companyName: "DOTS (Digital Optimized and Tenacious Solutions)",
      designation: "MEAN Stack Developer Internship",
      startDate: "July, 2020",
      endDate: "September, 2020",
    },
    {
      companyName: "ThingsGoSocial",
      designation: "Nodejs Backend developer Internship",
      startDate: "January, 2020",
      endDate: "June, 2020",
    },
  ];

  const achievements = [
    {
      title: "Going out of way to ensure team success",
      companyName: "Logic Square Technologies",
      description: `I received the award at Logic Square Technologies for “Going out of way to ensure team success"`,
    },
    {
      title: "Hackathon",
      companyName: "Logic Square Technologies",
      description:
        "I won Hackathon at Logic Square Technologies Company's Project.",
    },
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Career
          </h2>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {careers.map((each) => (
            <Card key={each.companyName}>
              <article className="p-4 md:p-8">
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-xl text-zinc-200 group-hover:text-white font-display">
                  {each.companyName}
                </h2>
                <p className="z-20 mt-4 text-md duration-1000 text-zinc-300 group-hover:text-zinc-200">
                  {each.designation}
                </p>

                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-500">
                      {each.startDate} - {each.endDate}
                    </p>
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>

      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Achievement
          </h2>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {achievements.map((each) => (
            <Card key={each.title}>
              <article className="p-4 md:p-8">
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-xl text-zinc-200 group-hover:text-white font-display">
                  {each.title}
                </h2>
                <p className="z-20 mt-4 text-md duration-1000 text-zinc-300 group-hover:text-zinc-200">
                  {each.description}
                </p>

                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-500">{each.companyName}</p>
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
