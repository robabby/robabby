import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Box } from "@radix-ui/themes";
import Header from "../../components/Header";
import CaseStudyContent from "../components/CaseStudyContent";
import { CASE_STUDIES, getCaseStudyBySlug } from "../data";
import "../style.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: "Not Found" };
  }

  return {
    title: `${caseStudy.title} | Rob Abby`,
    description: caseStudy.subtitle,
    openGraph: {
      title: `${caseStudy.title} | Rob Abby`,
      description: caseStudy.subtitle,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <Box style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <Header variant="subpage" />
      <CaseStudyContent caseStudy={caseStudy} />
    </Box>
  );
}
