import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Basic",
    popular: 0,
    price: 500,
    description:
      "Basic plan is for those who are just starting out and need a simple solution.",
    buttonText: "Get Started",
    benefitList: [
      "Resume Revamp",
      "5 mock interviews",
      "Upto 30 days",
      "Community support",
      "Interview preparation",
    ],
  },
  {
    title: "Standard",
    popular: 1,
    price: 1000,
    description:
      "Standard plan is for those who are looking for a more comprehensive solution.",
    buttonText: "Get Started",
    benefitList: [
      "Resume Revamp",
      "10 mock interviews",
      "Upto 45 days",
      "Priority support",
      "Interview preparation",
      "1:1 mentorship",
      "AI job search",
    ],
  },
  {
    title: "Premium",
    popular: 0,
    price: 2000,
    description:
      "Premium plan is for those who need a custom solution for themselves.",
    buttonText: "Get Started",
    benefitList: [
      "Resume Revamp",
      "15 mock interviews",
      "Upto 60 days",
      "Priority support",
      "Interview preparation",
      "1:1 mentorship",
      "AI job search",
      "Custom projects",
      "AI Job Apply",
      "AI Resume Builder",
      "LinkedIn Profile Review",
      "Job Tracker",
      "Linkedin Extension",
    ],
  },
];

export const Pricing = () => {
  const handleRedirect = () => {
    window.open("https://forms.gle/SvNCcg554DtVDh6d6", "_blank");
  };

  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Unlimited
        </span>{" "}
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose a plan that fits your needs. No hidden fees, no surprises.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">₹ {pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full" onClick={handleRedirect}>
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
