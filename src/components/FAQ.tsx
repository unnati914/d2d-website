import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How personalized is the AI agent’s resume editing?",
    answer:
      "The AI resume editor is fully personalized — it tailors resumes based on the user's target role, experience level, and job description. It rewrites bullet points, adjusts formatting, and aligns the content with industry-standard keywords and impact metrics.",
    value: "item-1",
  },
  {
    question: "How does the AI prioritize and apply to jobs?",
    answer:
      "The AI uses job scraping and ranking logic to find high-match opportunities based on skill-job overlap, location, and intent. It then auto-fills job applications or queues them with tailored cover letters for one-click submission.",
    value: "item-2",
  },
  {
    question: "Can users interact with the AI in real-time for quick edits or questions?",
    answer:
      "Yes, the AI is accessible through a chatbot-style interface for live queries, real-time resume feedback, and career navigation support. Users can ask for instant edits, role-specific resume tuning, or job strategy input.",
    value: "item-3",
  },
  {
    question: "What training data or models power the AI?",
    answer:
      "The AI is powered by fine-tuned OpenAI models and career-specific prompt engineering, trained on thousands of real job descriptions, successful resumes, and hiring manager insights. It integrates with vector search (pgvector) for contextual recall.",
    value: "item-4",
  },
  {
    question: "How does the AI agent work and help users?",
    answer:
      "The AI acts like a personalized career co-pilot — scanning job markets, tailoring resumes, suggesting job matches, and helping users prepare for interviews. It automates the grunt work while keeping users in control.",
    value: "item-5",
  },
  {
    question: "Does the AI learn and improve based on user performance?",
    answer:
      "Yes, user feedback loops (such as interview call-backs and job click-throughs) are used to improve future recommendations, prioritizations, and resume suggestions.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          href="mailto:preparewithhirvana@gmail.com?subject=Question%20about%20Hirvana"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
