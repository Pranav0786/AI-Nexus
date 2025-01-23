import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { initAOS } from "./components/aosConfig";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal"; // Import Modal component

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true); // Show modal on first render

  useEffect(() => {
    initAOS();
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleModal = () => setIsModalOpen(false); // Function to close modal

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Modal
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            message="Registrations are now closed. Thank you for your incredible support!"
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
