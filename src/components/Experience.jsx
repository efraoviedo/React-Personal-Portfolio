import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodeJs from "../assets/nodeJs.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import webPack from "../assets/webPack.png";
import typeScript from "../assets/typeScript.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "javaScript",
      style: "shadow-yellow-500",
    },

    {
      id: 5,
      src: nodeJs,
      title: "Node-Js",
      style: "shadow-white",
    },
    {
      id: 6,
      src: typeScript,
      title: "typeScript",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      title: "Firebase",
      src: firebase,

      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: webPack,
      title: "WebPack",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
  ];

  return (
    <div
      name="experience"
      className="pt-24 bg-gradient-to-b 
    from-gray-800 to-black min-h-fit"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center w-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4
            border-gray-500 p-2 inline"
          >
            Experience
          </p>
          <p className="py-6">
            These are technologies I have been working with
          </p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500
              py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
