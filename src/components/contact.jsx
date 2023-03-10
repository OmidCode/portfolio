import React from 'react';

function contact() {
  return (
    <div name="contact" className="w-full h-screen bg-slate-900 flex justify-center items-center p-4">
      <form action="https://getform.io/f/d218825b-2b43-4b93-8cbe-6434b3bb8df9" method="POST" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-300 text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">Submit the form below and let's work togheter</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" required></input>
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" required></input>
        <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message" required></textarea>
        <button className="text-white border-2 hover:bg-cyan-300 hover:border-cyan-300 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  );
}

export default contact;
