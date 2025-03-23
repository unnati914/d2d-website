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
                <strong>Mock Interview Package – ₹1000</strong>
                <br />- Real interview experience with industry professionals -
                Personalized feedback on strengths and areas for improvement -
                Practice both technical and HR interview rounds - Resume review
                to optimize job applications - Best for students, fresh
                graduates, and professionals switching jobs
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>Job Interview & Referral Package – ₹1000</strong>
                <br />- Direct access to job interview opportunities - Exclusive
                referrals to top companies - Insights on hiring trends, salary
                expectations, and company cultures - One-on-one career guidance
                from experienced professionals - Best for professionals aiming
                to enter or advance in top tech firms
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>Why Choose CodXCrypt’s Career Packages?</strong>
                <br />- Face real-world interview scenarios with expert guidance
                - Improve problem-solving, communication, and interview
                performance - Get resume feedback to increase job chances - Gain
                access to an extensive hiring network - Learn industry insights
                to stay ahead in the job market - Affordable investment of ₹1000
                per package for high career growth - Build confidence and get
                noticed by top companies
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Whether you're a student, job seeker, or working professional,
                these career packages provide the right guidance, exposure, and
                opportunities to help you grow. Prepare effectively, stand out
                to top companies, and take your career to the next level with
                CodXCrypt Community!
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
