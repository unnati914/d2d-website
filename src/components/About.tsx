// import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Hirvana AI Career Copilot"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  What is Hirvana? 🚀
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>
                  Hirvana is your AI-powered career copilot + human mentorship
                  platform.
                </strong>
                <br />
                It helps you discover the right opportunities, improve your
                application strategy, and accelerate your job readiness with
                smart tools and personalized guidance.
              </p>

              <p className="text-xl text-muted-foreground mt-4">
                <strong>✨ AI Resume & Job Assistant</strong>
                <br />
              </p>

              <p className="text-xl text-muted-foreground mt-4">
                <strong>🤝 Personalized Mentorship Support</strong>
                <br />
              </p>

              <p className="text-xl text-muted-foreground mt-4">
                Whether you're starting out or switching paths, Hirvana empowers
                you to take the next big step in your career.
              </p>
            </div>
            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
