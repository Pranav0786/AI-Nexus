import React, { useState } from 'react';
import './FAQ.css';  // Make sure to import your updated CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
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
    <section id='faq' className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <div className="accordion__list">
        {faqData.map((item, index) => (
          <div key={index} className={`accordion ${activeIndex === index ? 'active' : ''}`}>
            <button
              onClick={() => toggleAccordion(index)}
              className="accordion__question"
              aria-expanded={activeIndex === index ? 'true' : 'false'}
              aria-controls={`answer-${index}`}
            >
              {item.question}
              <span className="accordion__icon">{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              id={`answer-${index}`}
              className="accordion__answer"
              aria-hidden={activeIndex === index ? 'false' : 'true'}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
