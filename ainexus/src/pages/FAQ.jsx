import React, { useState } from 'react';
import { FaSortDown, FaSortUp } from "react-icons/fa";

const FAQ1 = () => {
  const [expandedSession, setExpandedSession] = useState(null);

  const FAQ1Data = [
    {
      question: 'Will there be any hands-on workshops?',
      answer: 'Yes, there will be several workshops where participants can engage in hands-on learning with AI tools and frameworks.'
    },
    {
      question: 'Will I receive a certificate for attending AI NEXUS?',
      answer: 'Yes, all participants will receive an e-certificate after the event from Global MLSA community and printed certificate from WCE MLSC.'
    },
    {
      question: 'How can I contact the organizers for more information?',
      answer: 'You can email us at mlsc@walchandsangli.ac.in  or call +91 92841 24132.'
    },
    {
      question: 'Do I need prior knowledge of AI to attend?',
      answer: 'Not necessarily! AI NEXUS includes sessions for beginners, intermediate learners, and advanced professionals. Everyone is welcome to join and learn.'
    },
    {
      question: 'What are the prizes for the winners?',
      answer: 'Winners will receive cash prizes, goodies, certificates, and special recognition on the event website and social media.'
    },
    {
      question: 'How do I stay updated about AI NEXUS?',
      answer: 'Follow us on social handles given below and check your email for regular updates.'
    },
    {
      question: 'What should I bring to the event?',
      answer: 'Bring your registration confirmation, a valid photo ID, and a laptop if you are having one(we will be providing PC too ).'
    }
  ];

  return (
    <section id='faq'
    data-aos="zoom-out-up"
    className=" m-10 w-10/12 lg:w-8/12 mx-auto ">
      <h2 className="text-4xl font-[Roboto] md:text-5xl font-bold text-red-400 mb-4 text-center">FAQS</h2>
      <div className="accordion__list space-y-4 ">
        {FAQ1Data.map((FAQ, index) => (
          <div key={index}  
          data-aos="zoom-out-up"
          className="bg-red-950/20 rounded-lg border border-red-950/50">
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
                  <p className="text-gray-400 ">{FAQ.answer}</p>
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
