export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between fixed top-0 left-0 w-full">
      <div className="flex gap-3 items-center">
        <img
          src="https://wellfound.com/cdn-cgi/image/width=140,height=140,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.wellfound.com/startups/i/10130633-833576a963b41d8946174d102bdc1200-medium_jpg.jpg?buster=1717832532"
          alt=""
          className="size-9"
        />
        <h1 className="text-lg font-semibold">WhatBytes</h1>
      </div>

      <div>
        <h2 className="font-bold border border-gray-300 p-2 rounded-md ">
          Rahil Siddique
        </h2>
      </div>
    </nav>
  );
}
