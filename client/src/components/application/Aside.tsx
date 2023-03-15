import React from "react";
import Image from "next/image";

import Logo from "../website/Logo";
import profilePic from "./../../public/profile.png";
import { color } from "@chakra-ui/react";
import {useLogout} from "../../Hooks/useLogout"
import {useRouter} from "next/router"
import Link from "next/link"

export default function Aside() {

  const {logout} = useLogout()
  const router = useRouter()

  const handleClick = () => {
    logout()
    router.push("/login")
  }

  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div>
            <Link
              href="/"
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Logo />
              <span className="self-center font-semibold whitespace-nowrap dark:text-white ml-3 text-3xl">
                Opinio
              </span>
            </Link>
            <ul className="space-y-2 mt-2">
              <li>
                <a
                  href="/dashboard"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="/my-integrations"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span>My Integrations</span>
                </a>
                <div>
                  <div className="p-2 pl-6 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    My App 1
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="/all-feedback"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span>All Feedback</span>
                </a>
              </li>
              <li>
                <a
                  href="/all-plots"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span>All Plots</span>
                </a>
              </li>
            </ul>
            <a
              href="/submit"
              className="block text-center text-white bg-primary hover:bg-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 mt-3"
            >
              Create new integration
            </a>
          </div>
          <button
            onClick={handleClick}
            style={{ backgroundColor: "red", zIndex: 12 }}
          >
            LOGOUT
          </button>
          <a
            href="/account"
            className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <figure>
              <Image alt="Opinio Logo" src={profilePic} width={50} />
            </figure>
            <span className="self-center font-normal whitespace-nowrap dark:text-white ml-3 text-xl">
              Account
            </span>
          </a>
        </div>
      </aside>
    </div>
  );
}
