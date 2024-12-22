import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { useEffect } from "react";
import { initAOS } from './components/aosConfig';

function App() {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
