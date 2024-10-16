import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const ThemeSettings = () => {
  const { setColor, currentColor, setMode, currentMode, setThemeSettings } =
    useStateContext();
  return (
    <div
      className="nav-item w-screen  top-0 
right-0 bg-half-transparent  fixed dark:text-gray-200"
    >
      <div
        className="h-screen float-right dark:text-gray-200 
      w-400 dark:[#484B52] bg-white dark:bg-main-dark-bg"
      >
        <div className="flex justify-between items-center p-4 ml-4 ">
          <p className="text-lg font-semibold ">Settings</p>
          <button
            type="button"
            onClick={() => {
              setThemeSettings(false);
            }}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineClose />
          </button>
        </div>
        <div className="flex-col border-color ml-4 p-4 border-t-1">
          <p className="text-xl font-semibold mt-3 "> Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              value="Light"
              name="theme"
              id="light "
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "Light"}
            />
            <label className="cursor-pointer ml-2 text-lg " htmlFor="light">
              Light
            </label>
          </div>

          <div className="mt-4">
            <input
              type="radio"
              value="Dark"
              name="theme"
              id="dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "Dark"}
            />
            <label className="cursor-pointer ml-2 text-lg " htmlFor="dark">
              Dark
            </label>
          </div>
        </div>

        <div className="flex-col border-color ml-2 p-4 border-t-1">
          <p className="text-xl font-semibold mt-3 mb-3"> Theme Colors</p>
          <div className="flex gap-2 mt-1">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative flex gap-2  ml-3 items-center cursor-pointer ">
                  <button
                    className="cursor-pointer rounded-full h-10 w-10"
                    type="button"
                    onClick={() => setColor(item.color)}
                    style={{ backgroundColor: item.color }}
                  >
                    <BsCheck
                      className={`text-2xl ml-1 text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    ></BsCheck>
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
