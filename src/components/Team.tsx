import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Linkedin, Twitter, Github } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/team/unnati.jpeg",
    name: "Unnati Chhabra",
    position: "Software Engineer @Zomato | IGDTUW Alum | GitHub Campus Expert",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/unnati-chhabra-/" },
      { name: "GitHub", url: "https://github.com/unnati914" },
      {
        name: "Twitter",
        url: "https://twitter.com/Unnati_twts",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Aanchal Mishra",
    position: "Core Team Member",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "/team/akanksha.jpg",
    name: "Akanksha Kushwaha",
    position:
      "Development Engineer @AlgoSec | Microsoft Certified: AZ-900, SC-900 | GHC Scholar’23",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/akankshakushwaha/",
      },
      { name: "GitHub", url: "https://github.com/aku1310" },
      {
        name: "Twitter",
        url: "https://twitter.com/Akanksha___13",
      },
    ],
  },
  {
    imageUrl: "/team/ananya.jpg",
    name: "Ananya Nagar",
    position: "Core Team Member",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "/team/arushi.jpg",
    name: "Arushi Rana",
    position:
      "BTech CSE Amity'26 | Website Development | Frontend developer | Design Team Member @ Software Engineering Club| UI-UX designer| Organizer @HerCode Microsoft Learn",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/arushi-rana-4849971bb",
      },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "/team/arya.png",
    name: "Arya Soni",
    position: "Building Startup | DevOps @Zupee | DevOps & Cloud Enthusiast",
    socialNetworks: [
      { name: "Linkedin", url: "https://linkedin.com/in/aryasoni/" },
      { name: "GitHub", url: "https://github.com/aryasoni98" },
      {
        name: "Twitter",
        url: "https://twitter.com/aryasoni98",
      },
    ],
  },
  {
    imageUrl: "/team/ayush.jpg",
    name: "Ayush Kumar",
    position: "DevRel | Community Builder | GCE | AWS Community Builder",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ayush-kumar-984443191/",
      },
      { name: "GitHub", url: "https://github.com/Ayush7614" },
      {
        name: "Twitter",
        url: "https://twitter.com/AyushKu38757918",
      },
    ],
  },
  {
    imageUrl: "/team/bhumika.jpg",
    name: "Bhumika Mandal",
    position:
      "Software Developer | UI/UX designer | HTML & CSS | Web Developer | Python | My SQL | C | Java script",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/bhumika-mandal-572346251/",
      },
      { name: "GitHub", url: "https://github.com/bmandal05" },
      {
        name: "Twitter",
        url: "https://x.com/BhumikaMan60307",
      },
    ],
  },
  {
    imageUrl: "/team/lavanya.JPG",
    name: "Lavanya Jain",
    position: "LLM developer | Python, Swift | Machine Learning & AI",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/lavanya-jain-095a14253",
      },
      { name: "GitHub", url: "https://github.com/Lavanya-Jain" },
      {
        name: "Twitter",
        url: "https://twitter.com/ilavanyajain",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Nitish",
    position: "Core Team Member",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "/team/priyanshi.jpg",
    name: "Priyanshi Rai",
    position: "Core Team Member",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "/team/rajat.jpeg",
    name: "Rajat Rajput",
    position:
      "President @ MLSC Amity | Alpha MLSA @ Microsoft | Core Team Member @ GDSC | Ex-Technical Lead @GFG Amity | CSE Undergrad",
    socialNetworks: [
      { name: "Linkedin", url: "https://linkedin.com/in/rajatrajput2004" },
      { name: "GitHub", url: "http://github.com/rajatuiwebdev" },
      {
        name: "Twitter",
        url: "https://twitter.com/rajatuiwebdev",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Saifuddin Saifee",
    position: "Core Team Member",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "/team/shefali.jpeg",
    name: "Shefali Kanojia",
    position: "Core Team Member",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Sujal Maiti",
    position: "Core Team Member",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "/team/sushant.jpeg",
    name: "Sushant Ardent",
    position: "Core Team Member",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "/team/tiya.jpg",
    name: "Tiya Bansal",
    position: "Incoming SWE @ JP Morgan, UK",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/tiya-bansal/" },
      { name: "GitHub", url: "https://github.com/TiyaBansal" },
      {
        name: "Twitter",
        url: "https://twitter.com/TiyaTwts",
      },
    ],
  },
  {
    imageUrl: "/team/vaishnavi.jpg",
    name: "Vaishnavi Pandey",
    position:
      "Senior Software Engineer @PineLabs, Full Stack Developer | Ex-Tata1Mg | ex-Attentive OS | ex-IBM, Mentor - topmate",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/vaishnavi29" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://www.x.com/vaishnavi0199",
      },
    ],
  },
  {
    imageUrl: "/team/vasay.png",
    name: "Vasay",
    position: "Core Team Member",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Vilsi Jain",
    position:
      "Software Engineer at Crosscert | Google WTM Ambassador | Flutter Jaipur Organizer | Microsoft Azure developer community Organizer | Open source | Coding | Developer | Tech Speaker | Judge",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/vilsijain08/" },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://twitter.com/VilsiJ",
      },
    ],
  },
  {
    imageUrl: "/team/vishrut.jpg",
    name: "Vishrut Aggarwal",
    position:
      "Semi-finalist @Flipkart GRiD 5.0 | Microsoft Certified: AZ-900, SC-900 | LiFT Scholar'23 | Web Developer @Social | Full-Stack Developer | Competitive Programmer | Open Source Contributor",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/vishrut-aggarwal/",
      },
      { name: "GitHub", url: "https://github.com/VishrutAggarwal" },
      {
        name: "Twitter",
        url: "https://twitter.com/AggarwalVishrut",
      },
    ],
  },
  {
    imageUrl: "/team/vraj.jpeg",
    name: "Vraj Desai",
    position: "DevRel @Huddle01 | Full Stack Developer | GitHub Campus Expert",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/vrajdesai78" },
      { name: "GitHub", url: "https://github.com/vrajdesai78" },
      {
        name: "Twitter",
        url: "https://twitter.com/vrajdesai78",
      },
    ],
  },
  {
    imageUrl: "/team/yash.jpg",
    name: "Yash Khattar",
    position:
      "Flutter Intern @UrbanRider | Flutter Lead @GDSC | SDC USICT | IIC Tech Head | Placement Coordinator at TnP Cell USICT | UI/UX | Btech IT'26",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/yash-khattar" },
      { name: "GitHub", url: "https://github.com/Yash-Khattar" },
      {
        name: "Twitter",
        url: "https://twitter.com/Yash_khattar73",
      },
    ],
  },
  {
    imageUrl: "/team/yashna.HEIC",
    name: "Yashna Baweja",
    position:
      "Web & UI Design | Frontend Development | Python | MySQL | C | HTML | CSS | Javascript",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/yashna-baweja-098305261",
      },
      { name: "GitHub", url: "https://github.com/" },
      {
        name: "Twitter",
        url: "https://x.com/bawejayashna?s=21",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "GitHub":
        return <Github size="20" />;

      case "Twitter":
        return <Twitter size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit! */}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              {/* <CardContent className="text-center pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent> */}

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          ),
        )}
      </div>
    </section>
  );
};
