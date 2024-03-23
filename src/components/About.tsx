import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Our Initiative{" "}
                </span>
                D2D
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                CodxCrypt Community is established with the primary aim to
                provide students with Coding Projects for freshers & assist them
                in acing their interviews. It also provides relevant insights
                into the different fields of emerging technologies in the
                industry.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                With a team of highly trained young professionals & college
                students, we try our best to work together & make significant
                impacts.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                As of July 2023, CodXCrypt Community is present in 3 Countries,
                with a Community Size of 1000+ People & has a following of more
                than 5K People spread throughout various Social Media Handles.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
