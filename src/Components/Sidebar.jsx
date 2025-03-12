import { FaCog } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { TfiMedallAlt } from "react-icons/tfi";
import { FaRegFile } from "react-icons/fa";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 md:flex hidden pt-[100px] text-black h-screen p-5 border-r border-gray-200">
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              href="/"
              className="flex items-center gap-5 p-2 hover:rounded-2xl text-lg hover:bg-gray-200 hover:text-blue-700"
            >
              <FiBarChart2 />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/profile"
              className="flex items-center gap-5 p-2 rounded text-lg hover:rounded-2xl hover:bg-gray-200  hover:text-blue-700 "
            >
              <TfiMedallAlt /> Skill Test
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-5 p-2 rounded text-lg hover:rounded-2xl hover:bg-gray-200  hover:text-blue-700"
            >
              <FaRegFile /> Internship
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
