import React, { useContext } from "react";
import { useState } from "react";
import Modal from "./modal";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ScoreContext } from "./ScoreContext";

export default function MainLeft() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    percentile,
    setPercentile,
    rank,
    setRank,
    currentScore,
    setCurrentScore,
  } = useContext(ScoreContext);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const labels = [0, 25, 50, 75, 100];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: labels.map(() => Math.floor(Math.random() * rank)),
        // borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="md:w-[60%] ">
      <p className="font-light">Skill Test</p>
      <div className="flex mt-7 p-4 gap-5 justify-between border-gray-200 border rounded ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
          alt=""
          className="size-14"
        />
        <div>
          <h3 className="font-bold mb-2.5">Hyper Text Markup Language</h3>
          <p>Questions: 08 | Duration: Submitted on 5June 2021</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-950 h-14 text-white px-7 rounded-xl"
        >
          Update
        </button>
      </div>
      <div className=" border-gray-200 border my-6 rounded">
        <h3 className="font-bold  m-5 text-lg">Quick Statistics</h3>
        <div className="grid mb-10 md:grid-cols-3 gap-6 px-5 grid-cols-1 item-center justify-center">
          <div className="flex gap-2 items-center">
            <div className="size-14 items-center justify-center flex bg-gray-300 rounded-full">
              <img
                src="https://img.freepik.com/premium-psd/gold-trophy-isolated-transparent-background_879541-1024.jpg"
                alt=""
                className="size-8"
              />
            </div>
            <div>
              <p className="font-extrabold text-2xl">{rank}</p>
              <h2 className="text-gray-400 text-lg">YOUR RANK </h2>
            </div>
          </div>
          <div className="flex gap-2 items-center md:pl-8 md:border-r md:border-l py-5 border-gray-300">
            <div className="size-14 items-center justify-center flex bg-gray-300 rounded-full">
              <img
                src="https://www.freeiconspng.com/thumbs/tasks-icon/tasks-icon-14.png"
                alt=""
                className="size-8"
              />
            </div>
            <div>
              <p className="font-extrabold text-2xl">{percentile}</p>
              <h2 className="text-gray-400 text-lg">PERCENTILE </h2>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="size-14 items-center justify-center flex bg-gray-300 rounded-full">
              <img
                src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-5.png"
                alt=""
                className="size-8"
              />
            </div>
            <div>
              <p className="font-extrabold text-2xl">{currentScore}</p>
              <h2 className="text-gray-400 text-lg">CORRECT ANSWERS </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-gray-200 border  p-4 my-6 rounded">
        <h2 className="text-lg font-bold pb-5">Comparison Graph</h2>
        <p>
          You scored {percentile} percentile which is lower than the average
          percentile 72% of all the engineer who took this assesment{" "}
        </p>
        <div className="mt-10 w-full md:h-[450px]">
          <Line options={options} data={data} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setPercentile={setPercentile}
        setRank={setRank}
        setCurrentScore={setCurrentScore}
      />
    </div>
  );
}
