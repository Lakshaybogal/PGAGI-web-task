import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Toingg’s pricing?",
      answer:
        "Toingg's pricing starts at 999 per month for the basic plan, with various tiers available to meet different business needs.",
    },
    {
      question: "What is Toingg?",
      answer:
        "Toingg is a comprehensive communication platform designed to streamline business interactions, offering features like call monitoring, prompt injection, and rate limits.",
    },
    {
      question: "How secure is Toingg?",
      answer:
        "Toingg uses state-of-the-art encryption and security protocols to ensure that all data is protected and secure. We also conduct regular security audits and updates.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is processed on a monthly basis, with options for annual subscriptions that offer a discount. Users can manage their billing preferences and view invoices through the Toingg dashboard.",
    },
    {
      question: "What phone numbers can I use with Toingg?",
      answer:
        "Toingg supports the use of both local and international phone numbers, allowing businesses to maintain a global presence. You can port your existing numbers or get new ones through our service.",
    },
    {
      question: "Does Toingg support multiple languages?",
      answer:
        "Yes, Toingg supports multiple languages, making it easier for businesses to communicate with their global customer base. The platform is continually expanding its language support to include more options.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Frequently asked questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border-b
        border-gray-500 "
        >
          <h2
            onClick={() => handleToggle(index)}
            className="text-lg fontmedium cursor-pointer p-2 relative"
          >
            {faq.question}{" "}
            <span className="absolute right-0">
              {activeIndex === index ? "-" : "+"}
            </span>
          </h2>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="p-4 ">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
