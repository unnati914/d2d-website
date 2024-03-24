
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      {/* <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="Arya Soni" src="/team/arya.png" />
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Arya Soni</CardTitle>
            <CardDescription>@aryasoni98</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Building Startup | DevOps @Zupee</CardContent>
      </Card> */}

      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="/team/unnati.jpeg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Unnati Chhabra</CardTitle>
          <CardDescription className="font-normal text-primary text-center">
            Founder @CodXCrypt | SDE @Zomato | IGDTUW Alum | GitHub Campus Expert
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Open-source Contributor, Mentor. Former MLH Fellow,
            Eclipse Adoptium Mentor.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              href="https://github.com/unnati914"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/unnati_twts"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/unnati-chhabra-/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            City Meetups
            <Badge variant="secondary" className="text-sm text-primary">
              Coming Up
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">7+ Cities</span>
            {/* <span className="text-muted-foreground"> /month</span> */}
          </div>

          <CardDescription>
          City meetups are being planned because many students don’t find opportunities that help people with advice, job opportunities, and support, especially in areas like technology.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full"> <a href="https://lu.ma/JaipurCityMeetup"></a> Jaipur Registration</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Opening + Keynote", "Session", "Panel Discussion"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ),
            )}
          </div>
        </CardFooter>
      </Card>

      {/* <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-full">
            <Avatar>
              <AvatarImage alt="Arya Soni" src="/team/sushant.jpeg" />
            </Avatar>
          </div>
          <div>
            <CardTitle>Sushant Ardent</CardTitle>
            <CardDescription className="text-md mt-2">
              Product, Engineering & Science, Generalist, Polymath, e/acc
            </CardDescription>
          </div>
        </CardHeader>
      </Card> */}
    </div>
  );
};
