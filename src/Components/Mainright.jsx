import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ScoreContext } from "./ScoreContext";

export default function MainRight() {
  const { rank, currentScore } = useContext(ScoreContext);

  return (
    <div className="">
      <div className="border mt-14 pb-15 border-gray-300 pt-5 px-5 ">
        <h2 className="text-lg mt-4 font-bold">Syllabus Wise Analysis </h2>
        <div className="pt-7">
          <h5 className=" pb-4">HTML Tools,Forms,History</h5>
          <div className="w-full flex justify-between items-center">
            <div className="w-4/5">
              <ProgressBar
                completed={80}
                height="10px"
                bgColor="blue"
                baseBgColor="#d4e9ee"
                isLabelVisible={false}
              />
            </div>
            <span className="text-sm font-bold text-gray-700">{80}%</span>
          </div>
        </div>
        <div className="pt-7">
          <h5 className=" pb-4">Tags & Reference in HTML</h5>
          <div className="w-full flex justify-between items-center">
            <div className="w-4/5">
              <ProgressBar
                completed={60}
                isLabelVisible={false}
                height="10px"
                baseBgColor="#f0e3b0"
                bgColor="#ff8339"
              />
            </div>
            <span className="text-sm font-bold texr-grat-700">{60}%</span>
          </div>
        </div>
        <div className="pt-7">
          <h5 className=" pb-4">Table & Reference in HTML</h5>
          <div className="w-full flex justify-between items-center">
            <div className="w-4/5">
              <ProgressBar
                completed={24}
                bgColor="#f95353"
                height="10px"
                baseBgColor="#f5dbda"
                className="custom-progress"
                isLabelVisible={false}
              />
            </div>
            <span className="text-sm font-bold texr-grat-700">{24}%</span>
          </div>
        </div>
        <div className="pt-7">
          <h5 className=" pb-4">Tables & CSS Basics</h5>

          <div className="w-full flex justify-between items-center">
            <div className="w-4/5">
              <ProgressBar
                completed={96}
                height="10px"
                baseBgColor="#e6f9ee"
                isLabelVisible={false}
                bgColor="#29bf65"
              />
            </div>
            <span className="text-sm font-bold texr-grat-700">{96}%</span>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 mt-5 p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold pt-4 pb-3">Question Analysis</h3>
          <p className="text-purple-900 font-bold">12/15</p>
        </div>
        <p>
          You scored {currentScore} questiions correct out of 15. However it
          still needs some improvements.
        </p>
        <div className=" pt-8 pb-10 h-[300px] w-[300px] mx-auto">
          <CircularProgressbar value={rank} maxValue={15} text={rank} />
        </div>
      </div>
    </div>
  );
}
