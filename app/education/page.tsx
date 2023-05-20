import { Navigation } from "../components/nav";
import React from "react";
import { Card } from "../components/card";
import Link from "next/link";

const Education = () => {
  const educations = [
    {
      university: "Maharshi Dayanand University",
      degree: "Bachelor of Technology - BTech",
      field: "Computer Science Engineering",
      startYear: "2016",
      endYear: "2020",
    },
    {
      university: "Vardhman Mahaveer Open University",
      degree: "Master of Science - MSc",
      field: "Computer Science",
      startYear: "2020",
      endYear: "2022",
    },
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Education
          </h2>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
          {educations.map((each) => (
            <Card key={each.university}>
              <article className="p-4 md:p-8">
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-xl text-zinc-200 group-hover:text-white font-display">
                  {each.university}
                </h2>
                <p className="z-20 mt-4 text-md duration-1000 text-zinc-300 group-hover:text-zinc-200">
                  {each.degree} ({each.field})
                </p>

                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-500">
                      {each.startYear} - {each.endYear}
                    </p>
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

export default Education;
