import { Navigation } from "../components/nav";
import React from "react";
import { Card } from "../components/card";

const Expertise = () => {
  const skills = [
    "React",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express.js",
    "GraphQL",
    "MongoDB",
    "Mongoose",
    "Redux-toolkit",
    "Git",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "Reactstrap",
    "Material-UI",
    "AWS S3 Bucket",
    "Yarn",
    "NPM",
    "Stripe",
    "Docusign",
    "Agora",
    "WebSocket",
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Expertise & Familiar
          </h2>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-2 gap-4 mx-auto lg:mx-0 md:grid-cols-5">
          {skills.map((skill) => (
            <Card key={skill}>
              <div className="text-center p-2 text-zinc-400">{skill}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
