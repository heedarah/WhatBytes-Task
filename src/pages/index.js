import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import MainLeft from "@/Components/Mainleft";
import MainRight from "@/Components/Mainright";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function Index() {
  return (
    <div className="flex h-screen">
      <Navbar />

      <Sidebar />

      <div className="flex flex-col flex-1 pt-[100px]">
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="md:flex gap-9 ">
            <MainLeft />
            <MainRight />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Index;
