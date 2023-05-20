import { notFound } from "next/navigation";
import { Header } from "./header";
import { ReportView } from "./view";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const allProjects: any = [];

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p: any) => p.published)
    .map((p: any) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project: any) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />
      <ReportView slug={project.slug} />
    </div>
  );
}
