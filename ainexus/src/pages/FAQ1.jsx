import React, { useState } from 'react';
import { FaSortDown , FaSortUp } from "react-icons/fa";

const FAQ1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedSession, setExpandedSession] = useState("")
  const [expandedPrize, setExpandedPrize] = useState(false)
  const [expandedObjectives, setExpandedObjectives] = useState(false)

  const toggleAccordion = index => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index);
    }
  };

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

  const Answers = [
    {
      answer: 'Our return policy allows returns within 30 days of purchase.'
    },
    {
      answer: 'Yes, we offer international shipping to most countries.'
    },
    {
      answer: 'You will receive an email with tracking information once your order ships.'
    },
    {
      answer: 'Yes, we accept gift cards as payment.'
    }
  ];

  return (
    <section id='FAQ1' className="FAQ1">
      <h2 className="FAQ1__title">Frequently Asked Questions</h2>
      <div className="accordion__list">
      {FAQ1Data.map((FAQ1Data, index) => (
                <div key={index} data-aos="fade-up"
                className="bg-red-950/20 rounded-lg border border-red-950/50">
                  <button 
                    onClick={() => setExpandedSession(expandedSession === index ? null : index)}
                    className="w-full text-left p-6 hover:bg-red-950/30 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-red-400 font-semibold">{FAQ1Data.question}</h3>
                        {/* <p className="text-gray-400 mt-1">{FAQ1Data.content}</p> */}
                      </div>
                      <span className="text-red-400 ml-4">
                        {expandedSession === index 
                        ? <FaSortUp className='mt-2'/> 
                        : <FaSortDown /> }
                      </span>
                    </div>
                  </button>
                  {expandedSession === index && (
                    <div className="px-6 pb-6 space-y-3">
                      <div className="h-px bg-red-950/50 mb-4"></div>
                      {Answers.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                          <p className="text-gray-400">{detail.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
      </div>
    </section>
  );
};

export default FAQ1;
