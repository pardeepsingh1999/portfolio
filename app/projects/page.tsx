import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default async function ProjectsPage() {
  const featured = {
    slug: "TrueFanz",
    title: "TrueFanz",
    description:
      "Social Media webapp, In which we can monetize our content. It has several white labels.",
    link: "https://www.truefanz.com/",
    tech: "MERN",
  };

  const top2 = {
    slug: "Statclub",
    title: "Statclub",
    description: "E-Learning webapp",
    link: "https://statclub-userapp.vercel.app/",
    tech: "Next, Node",
  };

  const top3 = {
    slug: "Augusta Rule",
    title: "Augusta Rule",
    description: "Tax Saving webapp",
    link: "https://augusta-rule.vercel.app/",
    tech: "Next, Apollo GraphQL",
  };

  const sorted = [
    {
      slug: "Cuisine",
      title: "Cuisine",
      description: "Chef & Recipes webapp",
      link: "https://cuisine-a4659.web.app/",
      tech: "React, Tailwindcss & DaisyUI",
    },
    {
      slug: "VaycoPlus",
      title: "VaycoPlus",
      description: "Resort management webapp",
      link: "https://vayco-resort.surge.sh/",
      tech: "MERN",
    },
    {
      slug: "Closewise",
      title: "Closewise",
      description: "Signing business management webapp",
      link: "https://closewise-userapp.surge.sh/",
      tech: "MERN",
    },
    {
      slug: "Parents meet",
      title: "Parents meet",
      description: "Connect Parents webapp",
      link: "http://parentsmeet-admin.surge.sh",
      tech: "MERN",
    },
    {
      slug: "Gif App",
      title: "Gif App",
      description:
        "Gif webapp, In which we can search trending Gif and also upload Gif",
      link: "http://gif-app.surge.sh",
      tech: "MERN",
    },
    {
      slug: "Folder directory",
      title: "Folder directory",
      description: "Folder directory webapp",
      link: "http://folder-list-create.surge.sh",
      tech: "React",
    },
    {
      slug: "ERC Approve",
      title: "ERC Approve",
      description: "Affiliate marketing webapp",
      link: "http://erc-approve.surge.sh",
      tech: "MERN",
    },
    {
      slug: "Hacker News",
      title: "Hacker News",
      description: "News webapp",
      link: "https://app-hacker-news.vercel.app/",
      tech: "MERN",
    },
    {
      slug: "Let's Chat",
      title: "Let's Chat",
      description:
        "Chat webapp, In which we can chat one-to-one and also create group one-to-many",
      link: "https://lets-chat-app.vercel.app/",
      tech: "MERN",
    },
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={featured.link} target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <span>{featured.tech}</span>
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map(
              (project: any) =>
                project && (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                )
            )}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {sorted.map((project: any) => (
            <Card key={project.slug}>
              <Article project={project} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
