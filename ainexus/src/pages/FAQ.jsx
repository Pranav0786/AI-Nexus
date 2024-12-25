import React, { useState } from 'react';
import { FaSortDown, FaSortUp } from "react-icons/fa";

const FAQ1 = () => {
  const [expandedSession, setExpandedSession] = useState(null);

  const FAQ1Data = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows returns within 30 days of purchase.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries.'
    },
    {
      question: 'How can I track my order?',
      answer: 'You will receive an email with tracking information once your order ships.'
    },
    {
      question: 'Do you accept gift cards?',
      answer: 'Yes, we accept gift cards as payment.'
    }
  ];

  return (
    <section id='FAQ1' className="FAQ1 m-10 w-10/12 lg:w-8/12 mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-red-400 mb-4">FAQS</h2>
      <div className="accordion__list space-y-4 ">
        {FAQ1Data.map((FAQ, index) => (
          <div key={index}  className="bg-red-950/20 rounded-lg border border-red-950/50">
            <button 
              onClick={() => setExpandedSession(expandedSession === index ? null : index)}
              className="w-full text-left p-6 hover:bg-red-950/30 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-red-400 font-semibold">{FAQ.question}</h3>
                </div>
                <span className="text-red-400 ml-4">
                  {expandedSession === index 
                    ? <FaSortUp className='mt-2'/> 
                    : <FaSortDown />}
                </span>
              </div>
            </button>
            {expandedSession === index && (
              <div className="px-6 pb-6 space-y-3">
                <div className="h-px bg-red-950/50 mb-4"></div>
                <div className="flex items-center space-x-3">
                  <p className="text-gray-400">{FAQ.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ1;
