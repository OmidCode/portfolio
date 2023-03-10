import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Sass from '../assets/sass.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import ReactImg from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import JavaScript from '../assets/javascript.png';

function Skills() {
  return (
    <div name="skills" className="w-full h-screen text-gray-300 bg-slate-900">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-300">Skills</p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sass} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="MongoDB icon" />
            <p className="my-4">MONGO</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="NodeJS icon" />
            <p className="my-4">NODE JS</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="Tailwind icon" />
            <p className="my-4">tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
