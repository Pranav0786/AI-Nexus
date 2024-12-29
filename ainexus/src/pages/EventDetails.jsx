import { useState  } from 'react'
import { Link } from 'react-scroll';
import { FaSortDown , FaSortUp } from "react-icons/fa";

export default function EventDetails() {
  const [expandedSession, setExpandedSession] = useState("")
  const [expandedPrize, setExpandedPrize] = useState(false)
  const [expandedObjectives, setExpandedObjectives] = useState(false)


  const sessions = [
    {
      title: "Session 1: Introduction to AI and Microsoft's AI Ecosystem",
      duration: "1.5 Hours",
      content: "Foundation of AI concepts, Microsoft Azure AI tools, and hands-on practice with Text Analytics API",
      details: [
        "Overview of Artificial Intelligence and its transformative role",
        "Microsoft's contributions to AI: Azure AI and OpenAI integration",
        "Key services of Azure Cognitive Services",
        "Setting up Azure account and accessing services",
        "Hands-on exercise with Text Analysis Tool",
      ]
    },
    {
      title: "Session 2: Building Chatbots with Azure",
      duration: "1.5 Hours",
      content: "Create intelligent chatbots using Azure Bot Services and LUIS with practical implementation",
      details: [
        "Introduction to Azure Bot Services and LUIS",
        "Use cases of chatbots in real-world applications",
        "Key steps to build chatbot functionalities",
        "Configure and train chatbot with LUIS",
        "Testing via web interface"
      ]
    },
    {
      title: "Session 3: Revision & Competition Prep",
      duration: "1.5 Hours",
      content: "Recap of key concepts and detailed explanation of hackathon rules",
      details: [
        "Review of key AI tools and hands-on activities",
        "Answer participant queries",
        "Cover any leftover topics",
        "Explain competition rules",
        "Real world case studies"
      ]
    },
    {
      title: "Session 4: Hack AI Blitz",
      duration: "2.5 Hours",
      content: "Build AI-powered solutions using Azure Cognitive Services or Bot Services",
      details: [
        "Theme: AI-powered solution development",
        "Individual or team-based participation",
        "Access to Azure resources and tools",
        "Live mentoring and support",
        "Final presentation and judging"
      ]
    }
  ]

  const objectives = [
    "Empower Participants with Practical AI Skills",
    "Showcase Microsoft's Role in AI Advancements",
    "Encourage Innovation and Creativity in AI Projects",
    "Promote Rapid Learning and Implementation"
  ]

  const prizes = [
    {
      title: "Windows Product Keys",
      description: "10-15 licenses for winners"
    },
    {
      title: "Azure Vouchers",
      description: "For all participants"
    },
    {
      title: "LinkedIn Premium",
      description: "10 premium accounts for winners"
    },
    {
      title: "MLSA Certificates",
      description: "From Global MLSA community"
    },
    {
      title: "MLSA Interaction",
      description: "Network with Microsoft Learn Student Ambassadors"
    }
  ]

  return (
    <div id='about' className="min-h-screen overflow-hidden bg-gradient-to-br from-black via-red-950 to-gray-950">
      <div
      data-aos="zoom-out-up"
      className="container mx-auto px-4 py-12 ">
        {/* Event Header */}
        <div 
        data-aos="zoom-out-up"
        className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-[Roboto] drop-shadow-lg font-bold text-red-400 mb-4">
            AI NEXUS
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto text-justify font-[Roboto]">
          AI Nexus is a transformative two-day event to empower you with cutting-edge AI skills. Explore powerful AI services from OpenAI and Azure AI, then apply your knowledge in the HACK AI BLITZ hackathon to solve real-world challenges. Learn first, then implement — the future of AI starts here!
          </p>
        </div>

        {/* Main Event Card */}
        <div data-aos="zoom-out-up" className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-950">
            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-gray-500 mb-1">Duration</div>
                <div className="text-red-400 font-semibold">2 Days</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 mb-1">Format</div>
                <div className="text-red-400 font-semibold">Hybrid (Theory + Hands-on)</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 mb-1">Competition</div>
                <div className="text-red-400 font-semibold">Hack AI Blitz</div>
              </div>
            </div>

            {/* Objectives Section */}
            <div data-aos="zoom-out-up" className="mb-8">
              <button 
                onClick={() => setExpandedObjectives(!expandedObjectives)}
                className="w-full text-left bg-red-950/20 rounded-lg p-6 border border-red-950/50 hover:bg-red-950/30 transition-colors"
              >
                <div 
                className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-red-400 font-[Roboto]">Event Objectives</h2>
                  <span className="text-red-400">
                    {expandedObjectives 
                    ? <FaSortUp className='mt-2' /> 
                    : <FaSortDown className='mb-2' /> } 
                  </span>
                </div>
              </button>
              {expandedObjectives && (
                <div data-aos="zoom-out-up" className="mt-4 space-y-4 p-4 bg-black/20 rounded-lg border border-red-950/30">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <p className="text-gray-400">{objective}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sessions Timeline */}
            <div 
            data-aos="zoom-out-up"
            className="mb-8 space-y-4">
              <h2 className="text-2xl font-bold text-red-400 mb-6 text-center font-[Roboto]">Event Schedule</h2>
              {sessions.map((session, index) => (
                <div key={index} data-aos="zoom-out-up"
                className="bg-red-950/20 rounded-lg border border-red-950/50">
                  <button 
                    onClick={() => setExpandedSession(expandedSession === index ? null : index)}
                    className="w-full text-left p-6 hover:bg-red-950/30 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-red-400 font-semibold">{session.title}</h3>
                        <p className="text-gray-400 mt-1">{session.content}</p>
                      </div>
                      <span className="text-red-400 ml-4">
                        {expandedSession === index 
                        ? <FaSortUp className='mt-2'/> 
                        : <FaSortDown /> }
                      </span>
                    </div>
                  </button>
                  {expandedSession === index && (
                    <div data-aos="zoom-out-up" className="px-6 pb-6 space-y-3">
                      <div className="h-px bg-red-950/50 mb-4"></div>
                      {session.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                          <p className="text-gray-400">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Prizes & Incentives */}
            <div data-aos="zoom-out-up" className="mb-8">
              <button 
                onClick={() => setExpandedPrize(!expandedPrize)}
                className="w-full text-left bg-red-950/20 rounded-lg p-6 border border-red-950/50 hover:bg-red-950/30 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-red-400 font-[Roboto]">Microsoft Incentives</h3>
                  <span className="text-red-400">
                    {expandedPrize 
                    ? <FaSortUp className='mt-2'/> 
                    : <FaSortDown className='mb-1'/> }
                  </span>
                </div>
              </button>
              {expandedPrize && (
                <div data-aos="zoom-out-up" className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prizes.map((prize, index) => (
                    <div key={index} className="bg-black/20 rounded-lg p-4 border border-red-950/30">
                      <h4 className="text-red-400 font-semibold mb-1">{prize.title}</h4>
                      <p className="text-gray-400 text-sm">{prize.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Registration */}
            <div data-aos="zoom-out-up" className="text-center">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-400 mb-2 font-[Roboto]">Ready to Innovate?</h3>
                <p className="text-gray-400">Join us for this immersive AI learning experience</p>
              </div>
              <button 
                className="px-8 py-3 bg-red-950 text-red-400 rounded-full font-semibold hover:bg-red-900 transition-colors border border-red-900"
              >
                <Link 
                    to="register" 
                    smooth={true} 
                >
                  Register for AI Nexus
                </Link>
              </button>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
            data-aos="zoom-out-left"
            className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-red-950">
              <h3 className="text-xl font-semibold text-red-400 mb-3 font-[Roboto]">Team Size</h3>
              <p className="text-gray-400">1-2 members per team</p>
            </div>
            <div 
            data-aos="zoom-out-right"
            className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-red-950">
              <h3 className="text-xl font-semibold text-red-400 mb-3 font-[Roboto]">Requirements</h3>
              <p className="text-gray-400">Basic programming knowledge & laptop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}