import React from "react";
import calculator1 from "../assets/portfolio/calculator1.png";
import appWeather from "../assets/portfolio/appWeather.png";
import facebookClone from "../assets/portfolio/facebookClone.png";
import memoryGame from "../assets/portfolio/memoryGame.png";
import cvApplication from "../assets/portfolio/cvApplication.png";
import battleShipProject from "../assets/portfolio/battleShipProject.png";
import rockPaperScissorsGame from "../assets/portfolio/rockPaperScissorsGame.png";
import EtchASketchGame from "../assets/portfolio/EtchASketchGame.png";

import ticTacTocGame from "../assets/portfolio/ticTacTocGame.png";
import { Link } from "react-scroll";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: calculator1,
      title: "Digital Calculator",
      href: "https://github.com/efraoviedo/Calculadora",
    },
    {
      id: 7,
      src: EtchASketchGame,
      title: "Etch A Sketch Game",
      href: "https://efraoviedo.github.io/index.html-cuadricula/",
    },
    {
      id: 8,
      src: facebookClone,
      title: "Facebook Clone",
      href: "https://efraoviedo.github.io/Facebook-clone/",
    },
    {
      id: 9,
      src: memoryGame,
      title: "Memory Game",
      href: "https://github.com/efraoviedo/My-add-memorygame",
    },
    {
      id: 2,
      src: cvApplication,
      title: "CV Application",
      href: "https://efraoviedo.github.io/My-CV-react-app/",
    },
    {
      id: 3,
      src: battleShipProject,
      title: "BattleShip Game",
      href: "https://efraoviedo.github.io/Battleship-project/",
    },
    {
      id: 4,
      src: rockPaperScissorsGame,
      title: "Rock Paper Scissors Game",
      href: "https://efraoviedo.github.io/PiedraPapelOTijeras/",
    },
    {
      id: 5,
      src: appWeather,
      title: "App Weather",
      href: "https://efraoviedo.github.io/app-weather/",
    },
    {
      id: 6,
      src: ticTacTocGame,
      title: "Tic Tac Toe Game",
      href: "https://efraoviedo.github.io/juego-Tic-Tac-Toe/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white min-h-fit"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">
            This React portfolio website was builded using Tailwind CSS and
            deploying it to server.I work with JavaScript, React, and Tailwind
            for our CSS, adding social icons, custom fonts, gradient background,
            and responsive design.{" "}
          </p>
          <p className="py-6">
            Check out some of my work projects on my portfolio Here
          </p>
          <p>MORE REPOSITORIES IN MY GIT REPOSITORY NAME</p>
        </div>

        <div
          className="grid sm:grid-cols-3 md:grid-cols-4 gap-8
                px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, title, href, download }) => (
            <div
              key={id}
              className={`shadow-md shadow-gray-600 
            rounded-lg `}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full
                     text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  // href={href}
                  src={src}
                  alt=""
                  className="rounded-md h-44 
                        duration-200 hover:scale-105"
                />
              </a>

              <p className="m-2 h-fit flex justify-center align-middle text-xl">
                {title}
              </p>

              <div className="flex items-center justify-center hover:scale-10 cursor-pointer">
                <Link
                  to="experience"
                  smooth
                  duration={500}
                  className="w-1/2 px-6 py-3 m-4 duration-200
                            hover:scale-105"
                >
                  Demo
                </Link>
                <Link
                  to={"home"}
                  smooth
                  duration={500}
                  className="w-1/2 px-6 py-3 m-4 duration-200
                            hover:scale-105"
                >
                  Code
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
