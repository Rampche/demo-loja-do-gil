import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [nav, setNav] = useState<true | false>(false);

  const navList = [
    {
      name: 'Acessórios',
    },
    {
      name: 'Material Escolar',
    },
    {
      name: 'Garrafas',
    },
    {
      name: 'Outros',
    },
  ];

  const handleNavBar = (event: any) => {
    event.preventDefault();
    setNav(!nav);
  };

  return (
    <nav>
      <div className="flex justify-between px-6 sm:px-24 w-full bg-[#1a6887] text-lg text-white font-semibold">
        <h1 className="p-4">Loja do Gil</h1>
        <ul className="hidden sm:flex flex-row justify-around p-4 w-2/3 bg-red">
          {navList.map(({ name }, index) => (
            <li key={index} className="cursor-pointer">
              {name}
            </li>
          ))}
        </ul>

        <button className="sm:hidden" onClick={handleNavBar}>
          <FaBars size="1.8rem" className="cursor-pointer ml-1 mt-1" />
        </button>
      </div>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className={
          nav
            ? 'sm:hidden overflow-y-hidden ease-in duration-500 absolute z-50 bg-[#1a6887] text-white left-0 top-0 w-full h-screen opacity-95 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen w-full left-[-100%] ease-in duration-500 z-50 bg-[#F7F7F7] text-white'
        }
      >
        <ul className="pt-12 text-center h-full w-full">
          {navList.map(({ name }, idx) => (
            <li className="py-8 text-lg font-semibold" key={idx}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
