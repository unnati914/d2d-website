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
    name: "Ginni Pahwa",
    comment:
      "D2D conference 3.0 was definitely the best event to kickstart 2024",
  },
  {
    name: "Aishvi Guleria",
    comment: "The D2D 3.0 had the vibe✅",
  },

  // {
  //   image: "#",
  //   name: "John Doe React",
  //   userName: "@john_Doe2",
  //   comment:
  //     "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  // },
  // {
  //   image: "#",
  //   name: "John Doe React",
  //   userName: "@john_Doe3",
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  // },
  // {
  //   image: "#",
  //   name: "John Doe React",
  //   userName: "@john_Doe4",
  //   comment:
  //     "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
  // },
  // {
  //   image: "#",
  //   name: "John Doe React",
  //   userName: "@john_Doe5",
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Community
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Feedbacks are important for us!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ name, comment }: TestimonialProps) => (
          <Card
            // key={userName}
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt="" src={""} />
                <AvatarFallback> D2D </AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
