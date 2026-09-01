export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What types of cybersecurity services do you offer?",
    answer: "We offer comprehensive cybersecurity solutions including penetration testing, vulnerability assessments, security auditing, and continuous monitoring to protect your digital assets."
  },
  {
    question: "How can AI integration benefit my business?",
    answer: "AI can automate repetitive tasks, provide deep insights through data analysis, enhance customer experiences with intelligent chatbots, and optimize your overall operational efficiency."
  },
  {
    question: "Do you build custom software from scratch?",
    answer: "Yes, our software engineering team specializes in building scalable, secure, and high-performance custom applications tailored to your specific business requirements."
  },
  {
    question: "How long does a typical engagement last?",
    answer: "The duration varies depending on the project scope. A security audit might take a few weeks, while custom software development can range from a few months to ongoing continuous delivery."
  }
];
