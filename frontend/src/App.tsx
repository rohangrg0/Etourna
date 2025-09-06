import React from "react";
import Home from "./pages/Home"; // adjust path if your Home.tsx is somewhere else
import "./index.css"; // Tailwind styles

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Home />
    </div>
  );
};

export default App;
