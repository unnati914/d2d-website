import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: " Mentee Registers",
    description:
      "Mentee registers for the program and fills out a form with their details.",
  },
  {
    icon: <MapIcon />,
    title: "Confirmation of Registration",
    description:
      "Mentee receives a confirmation email with details of the program.",
  },
  {
    icon: <PlaneIcon />,
    title: "Mentor Assigned",
    description:
      "Mentee is assigned a mentor based on their profile and preferences.",
  },
  {
    icon: <GiftIcon />,
    title: "Mentorship Begins",
    description:
      "Mentee and mentor start the mentorship program with an introductory call.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
       Hirvana mentorship program step by step guide to help you grow in your career
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
