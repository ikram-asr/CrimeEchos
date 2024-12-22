import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importer framer-motion
import blood from '../assets/blood.svg';
import arr from '../assets/arrieresansblood.svg';
import logo from '../assets/logo_crime.png';
import { IoMdArrowRoundBack } from "react-icons/io";

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/DashBoard');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-black text-white"
      initial={{ x: '100%' }}     // Initialisation de l'animation (hors de l'écran à droite)
      animate={{ x: 0 }}          // Position finale (au centre)
      exit={{ x: '-100%' }}       // Quand la page quitte, elle se déplace à gauche
      transition={{ duration: 0.8 }} // Durée de l'animation
    >
      <img 
        className="absolute z-0 opacity-60 top-0 left-0 h-64 w-full object-cover" 
        src={blood} 
        alt="Blood Icon" 
      />
      
      {/* Formulaire d'inscription */}
      <div className="w-full md:w-3/5 relative flex items-center justify-center px-4"> 
        <div className="w-full max-w-md h-[500px] bg-white p-6 flex flex-col justify-center border border-white rounded-3xl backdrop-blur-xl bg-opacity-30">
          <h1 className="text-3xl font-bold mb-4 text-center koulen">CREATE ACCOUNT</h1>
          <p className="text-lg text-center text-white mb-6">
            Already have an Account?{" "}
            <a href="/login" className="text-yellow-400 hover:underline">
              Log in
            </a>
          </p>
          <form className="space-y-4">
            <div className="group">
              <label className="block text-lg font-medium group-focus-within:text-yellow-400">Name</label>
              <input
                type="text"
                className="w-full px-3 py-1 bg-transparent border-b-2 border-white focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div className="group">
              <label className="block text-lg font-medium group-focus-within:text-yellow-400">Email</label>
              <input
                type="text"
                className="w-full px-3 py-1 bg-transparent border-b-2 border-white focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div className="group">
              <label className="block text-lg font-medium group-focus-within:text-yellow-400">Password</label>
              <input
                type="text"
                className="w-full px-3 py-1 bg-transparent border-b-2 border-white focus:outline-none focus:border-yellow-400"
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit" 
                onClick={handleSignUp}
                className="w-24 bg-[#982222] text-white py-2 rounded-md font-bold hover:bg-red-700 text-2xl koulen"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Back to Home Button */}
      <motion.button
        onClick={handleGoHome}
        className="absolute top-5 left-5 flex items-center text-white bg-black p-2 rounded-full hover:bg-gray-700 transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <IoMdArrowRoundBack className="text-2xl mr-2 koulen" />
        Back to Home
      </motion.button>

      {/* Section à droite */}
      <div className="w-full md:w-2/5 bg-cover bg-right relative h-screen ml-auto hidden sm:block">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 p-6">
          <h1 className="text-white text-3xl md:text-4xl font-bold z-10 -mt-40 nosifer">GET STARTED</h1>
          <h1 className="text-[#580B0B] text-3xl md:text-4xl font-bold z-0 nosifer -mt-[30px] md:-mt-[30px] ">
            GET STARTED
          </h1>
          <img className="w-48 h-auto mb-2 mt-6" src={logo} alt="logo" />
          <p className="text-3xl text-white uppercase font-bold tracking-wide koulen">Crimechos</p>
        </div>

        {/* Image de fond */}
        <img 
          src={arr} 
          alt="Crime Scene Background"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export default SignUpPage;
