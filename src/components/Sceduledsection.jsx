import React from "react";

const Schedulesection = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.66)), url("./laptop.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 2.5%",
      }}
    >
      <div className=" flex-col space-y-4">
        <h2 className="text-6xl font-extralight leading-tight">
          Delivering on a mission to <br /> create <span className="font-extralight font-sans">better</span> spaces.
        </h2>
     
      <div>
      <button className=" text-white text-center tracking-widest font-extralight uppercase bg-transparent border border-[rgba(181,171,161,0.6)] rounded-full justify-center items-center mx-0 px-10 py-4 font-sans text-[0.625rem] leading-tight inline-block relative hover:bg-[#0d0d0d8c]">
                  Schedule Call
                </button>
      </div>
      </div>
    </div>
  );
};

export default Schedulesection;
