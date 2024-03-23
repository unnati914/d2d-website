interface SponsorProps {
  iconName: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
];

const communityPartners: SponsorProps[] = [
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
];

const pastSponsors: SponsorProps[] = [
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
  {
    iconName: "/sponsors/devfolio.png",
    name: "Sponsor 1",
  },
];

const SponsorSection = ({
  title,
  sponsors,
}: {
  title: string;
  sponsors: SponsorProps[];
}) => (
  <section className="container pt-16 sm:py-18">
    <h2 className="text-center text-md lg:text-4xl font-bold mb-8 text-primary">
      {title}
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
      {sponsors.map(({ iconName, name }, index) => (
        <div key={index} className="text-center p-4">
          <div
            className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center overflow-hidden rounded-full bg-gray-100"
            style={{ transition: "transform 0.3s ease-in-out" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={iconName}
              alt={name}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <h3 className="text-xl font-bold mt-2">{name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export const Sponsors = () => {
  return (
    <>
      <SponsorSection title="Our Sponsors" sponsors={sponsors} />
      <SponsorSection title="Community Partners" sponsors={communityPartners} />
      <SponsorSection title="Past Sponsors" sponsors={pastSponsors} />
    </>
  );
};