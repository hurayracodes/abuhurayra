import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/* ===== FAQ Component ===== */
const FAQComponent = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6">
          Technical Insights
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my technical skills, mindset, and how I build scalable and
          performant systems.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-5">
        {faqs.map((faq, index) => {

          return (
            <div
              key={index}
              className="group/card relative rounded-2xl bg-slate-900/50 border border-slate-800
              transition-all duration-300 overflow-hidden
              hover:border-cyan-400 hover:shadow-cyan-400/30 hover:shadow-2xl"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent
                -skew-x-12 -translate-x-full group-hover/card:translate-x-full
                transition-transform duration-700 z-0" />

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="relative z-10 w-full flex items-center justify-between p-5 text-left"
              >
                <h3 className="text-sm sm:text-base font-semibold text-slate-100">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-cyan-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`relative z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-7 pt-2">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ===== Data ===== */
const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in full-stack development using React, Next.js, TypeScript, Node.js, and MongoDB.",
  },
  {
    question: "What kind of projects have you built?",
    answer:
      "I have built SaaS platforms, dashboards, e-commerce systems, and AI-powered applications.",
  },
  {
    question: "Do you have experience with DevOps and deployment?",
    answer:
      "Yes, I work with CI/CD, Docker, AWS, Vercel, and Netlify deployments.",
  },
  {
    question: "How do you ensure code quality?",
    answer:
      "Through testing, code reviews, ESLint, Prettier, and TypeScript.",
  },
  {
    question: "Are your projects mobile responsive?",
    answer:
      "Yes, all projects follow a mobile-first and responsive design approach.",
  },
];

/* ===== Export ===== */
const FAQSection = () => <FAQComponent faqs={faqs} />;

export default FAQSection;
