import React from "react";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Chat, Cart, UserProfile, Notification } from ".";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute
      inline-flex h-2  rounded-full w-2 right-2 top-2"
        ></span>
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,

    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else setActiveMenu(true);
  }, [screenSize]);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <div
      className="flex justify-between p-2
   md:mr-6 relative md:ml-6 "
    >
      <div className="flex flex-wrap hover:drop-shadow-lg ">
        <NavButton
          title="menu"
          customFunc={handleActiveMenu}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
        <NavButton title="search" color={currentColor} icon={<FaSearch />} />
      </div>
      <div className="flex hover:drop-shadow-lg">
        <NavButton
          title={Cart}
          customFunc={() => {
            handleClick("cart");
          }}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={Chat}
          dotColor={"#03C9D7"}
          customFunc={() => {
            handleClick("chat");
          }}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title={Notification}
          dotColor={"#FFAE42"}
          customFunc={() => {
            handleClick("notification");
          }}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center cursor-pointer gap-2
       p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {
              handleClick("userProfile");
            }}
          >
            <img src={avatar} className="rounded-full w-10 h-10"></img>
            <p>
              <span className="text-gray-400 text-14">Hi ,</span>
              <span className="text-gray-400 text-14 m-1 font-bold">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};
export default Navbar;
