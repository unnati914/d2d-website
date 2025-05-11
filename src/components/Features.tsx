import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import imageAI from "../assets/growth.png";
import imageChat from "../assets/reflecting.png";
import imageCareer from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "AI-Powered Resume Editor",
    description:
      "Tailors your resume to match job descriptions, rewrites bullet points with industry keywords, and aligns it with recruiter expectations in seconds.",
    image: imageAI,
  },
  {
    title: "Real-time Chat Interface",
    description:
      "Interact with Hirvana's chatbot for instant resume edits, career advice, job application strategies, and feedback — anytime, anywhere.",
    image: imageChat,
  },
  {
    title: "Career Copilot & Mentorship",
    description:
      "Combines AI recommendations with weekly guidance from industry mentors to help you prepare, apply, and grow confidently in your career.",
    image: imageCareer,
  },
];

const featureList: string[] = [
  "Resume Editing",
  "Live AI Chat",
  "Job Matching",
  "Cover Letter Gen",
  "Mentorship Support",
  "Career Feedback",
  "Progress Tracking",
  "Real-time Interaction",
  "Vector Search Memory",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        What Makes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Hirvana Powerful
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
