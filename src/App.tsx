import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Features } from "./components/Features";
// import {Services} from "./components/Services";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <About />
      <HowItWorks />
      <Features />
      {/* <Services /> */}
      {/* <Cta /> */}
      <Testimonials />
      {/* <Team /> */}
       <Pricing />
      {/* <Newsletter /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
