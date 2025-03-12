import { useState } from "react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function modal({ isOpen, onClose, setRank, setCurrentScore, setPercentile }) {
  if (!isOpen) return null;

  return (
    <div className="bg-[rgba(0,0,0,0.5)] flex items-center justify-center fixed w-screen top-0 left-0 h-screen z-50">
      <div className="w-[650px] bg-white rounded">
        <div className="flex justify-between pt-7 px-4">
          <h1 className="text-xl font-extrabold">Update scores</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
            alt=""
            className="size-12"
          />
        </div>
        <div className="px-5">
          <div className="flex py-8 justify-between">
            <div className="flex gap-5">
              <p className="rounded-full size-8 justify-center flex items-center bg-blue-950 text-white">
                1
              </p>
              <p>
                Update your <span className="font-bold">Rank</span>
              </p>
            </div>
            <input
              type="number"
              onChange={(e) => setRank(Number(e.target.value))}
              className="border  px-3 h-11 border-blue-400 rounded-lg"
            />
          </div>
          <div className="flex py-8 justify-between">
            <div className="flex gap-5">
              <p className="rounded-full size-8 justify-center flex items-center bg-blue-950 text-white">
                2
              </p>
              <p>
                Update your <span className="font-bold">Percentile</span>
              </p>
            </div>
            <input
              type="number"
              onChange={(e) => setPercentile(Number(e.target.value))}
              className="  px-3 h-11 border border-blue-400 rounded-lg"
            />
          </div>
          <div className="flex pt-8 pb-5 justify-between">
            <div className="flex gap-5">
              <p className="rounded-full size-8 justify-center flex items-center bg-blue-950 text-white">
                3
              </p>
              <p>
                Update your
                <span className="font-bold"> Current Score (out of 15)</span>
              </p>
            </div>
            <input
              type="number"
              onChange={(e) => setCurrentScore(Number(e.target.value))}
              className=" border px-3 h-11 border-blue-400 rounded-lg"
            />
          </div>
        </div>
        <div className="flex  gap-7 pb-6 pr-5 ">
          <button
            onClick={onClose}
            className=" text-blue-950 font-bold ml-auto border rounded-md text-sm border-blue-900 p-4"
          >
            cancel
          </button>

          <button
            onClick={onClose}
            className="bg-blue-950 text-white px-10 py-4 flex items-center gap-2"
          >
            save
            <FaArrowRightLong className="text-white " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default modal;
