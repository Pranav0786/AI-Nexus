import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { initAOS } from "./components/aosConfig";
import Loader from "./components/Loader/Loader";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    initAOS();
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
