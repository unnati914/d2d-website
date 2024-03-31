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
                  Our Initiative ❤️{" "}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                The D2D Conference, an initiative by CodXCrypt Community, shows
                how committed the organisation is to bringing people together,
                sharing knowledge, and helping professionals grow in the tech
                world. After three successful conference, the community aims to
                reach more cities like Bangalore, Jaipur, Dehradun,Mumbai
                Vadodara,Chandigarh and Lucknow, making it a bigger and more
                engaging experience for students and professionals
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                A big advantage of the D2D Conference is that it's a great place
                to connect with others. It brings students, recent grads,
                experienced professionals, and industry experts together,
                creating an environment where people can make meaningful
                connections and build relationships that help everyone involved.
                Students especially benefit by getting to talk to people working
                in the industry, seeking advice, and learning about different
                career options. And it's not just for students – the conference
                is open to professionals too. It's a place where people in the
                industry can meet, share ideas, and stay informed about what's
                happening. Professionals can use the conference to hire a good
                pool of people, find collaboration opportunities, and stay in
                the loop about the latest innovations in their fields.
              </p>

              <p className="text-xl text-muted-foreground mt-4"></p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
