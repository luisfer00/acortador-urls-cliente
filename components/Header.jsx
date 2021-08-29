import Link from "next/link";
import React from "react";

const Header = ({ setSlug }) => {
  return (
    <header className="bg-blue-400 text-center sm:flex sm:justify-between sm:items-center p-5 text-white">
      <div className="logo">
        <h1 className="text-3xl sm:text-4xl">
          Acortador <span className="italic">URL</span>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a
                className="text-base w-full block mt-2 py-2 px-4 bg-blue-500 hover:bg-white hover:text-black sm:text-lg sm:m-0 sm:rounded-full"
                onClick={() => setSlug("")}
              >
                Inicio
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
