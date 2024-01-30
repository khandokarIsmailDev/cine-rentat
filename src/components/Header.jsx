import React, { useContext, useState } from "react";
import CardDetail from "./cine/CardDetail";
import { MovieContext, ThemeContext } from "../context";
import Moon from '../assets/moon.svg'
import Sun from '../assets/sun.svg'

const Header = () => {
  const [showCardDetail,setShowCardDetail] = useState(false)
  // context use korbo
  const {cartData} = useContext(MovieContext)

  //for dark mode
  const {darkMode,setDarkMode} = useContext(ThemeContext)

  function handleShowCardDetail (){
    setShowCardDetail(true)
  }

  function handleCloseCardDetail (){
    setShowCardDetail(false)
  }

  return (
    <>
    {
      showCardDetail && <CardDetail onClose={handleCloseCardDetail}/>
    }
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src="/logo.svg" width={139} height={26} alt="" />
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src="/ring.svg" width={24} height={24} alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(darkMode => !darkMode)}
            >
              <img
                src={darkMode ? Sun : Moon}
                width={24}
                height={24}
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src="/shopping-cart.svg"
                width={24}
                height={24}
                alt=""
                onClick={handleShowCardDetail}
              />
              {
                cartData.length > 0 && (
                  <span
                   className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]"
                  >
                    {cartData.length}
                  </span>
                )
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
