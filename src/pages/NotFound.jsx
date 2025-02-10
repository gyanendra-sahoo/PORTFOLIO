import React from "react";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        404
      </h1>
      <p className="text-gray-400 text-lg md:text-xl text-center mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-white text-black rounded-lg flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 font-semibold"
      >
        <Home size={20} />
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
