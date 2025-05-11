import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Mentee 1",
    comment: "All doubts getting answered clearly during the sessions.",
  },
  {
    name: "Mentee 2",
    comment: "Mock interviews helped me understand what interviewers expect.",
  },
  {
    name: "Mentee 3",
    comment: "Resume review was spot on. I got more replies after updating it.",
  },
  {
    name: "Mentee 4",
    comment: "Loved the weekend prep—super productive and structured!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Developers Love Hirvana
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Real feedback from mentees who grew with us.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ name, comment }, index) => (
          <Card key={index} className="max-w-md mx-auto">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage src="" alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>Mentee</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {comment}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
