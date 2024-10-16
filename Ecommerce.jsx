import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { ChartsHeader } from "../components";
import { Button, Stacked, Pie, SparkLine, LineChart } from "../components";
import { Area } from ".";

import {
  earningData,
  ecomPieChartData,
  SparklineAreaData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { GoDotFill } from "react-icons/go";
const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <>
      <div className="mt-12">
        <div className="flex flex-wrap justify-center lg:flex-nowrap ">
          <div
            className="bg-white dark:text-gray-200
             w-full p-8 dark:bg-secondary-dark-bg
    pt-9 m-3 lg:w-80 
    h-44 rounded-xl "
          >
            <div className="flex  justify-between items-center ">
              <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p className="text-2xl font-semibold ">$46,789,90 </p>
              </div>
              <button
                type="button"
                className="text-2xl text-white opacity-0.9 hover:drop-shadow-xl rounded-full p-4
                transition-shadow  dark:hover:shadow-lg"
                style={{ backgroundColor: currentColor }}
              >
                <BsCurrencyDollar />
              </button>
            </div>

            <div className="mt-6">
              <Button
                color="white"
                bgColor={currentColor}
                borderRadius="10px"
                text="Download"
                size="md"
              ></Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 m-3 items-center justify-center ">
            {earningData.map((item) => (
              <div
                key={item.title}
                className="dark:text-gray-200 bg-white
               p-4 pt-9 rounded-2xl dark:bg-secondary-dark-bg md:w-52"
              >
                <button
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="hover:drop-shadow-xl opacity-0.9 rounded-full text-2xl p-4"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span
                    className={`text-sm  
                    text-${item.pcColor} ml-2`}
                  >
                    {item.percentage}
                  </span>
                </p>
                <p className="text-gray-400 text-sm mt-1  ">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          <div
            className="bg-white dark:bg-secondary-dark-bg 
          rounded-2xl dark:text-gray-200 md:w-780 m-3 p-4"
          >
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Revenue Updates</p>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl dark:text-gray-200">
                  <span>
                    <GoDotFill />
                  </span>
                  <span>Expense</span>
                </p>
                <p className="flex items-center gap-4 text-green-400 hover:drop-shadow-xl">
                  <span>
                    <GoDotFill />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-10 mt-10 flex-wrap ">
              <div className="border-color border-r-1  m-4 pr-10 ">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$90,779</span>
                    <span className="text-xs p-1.5 hover:drop-shadow-xl text-white bg-green-400 rounded-full ml-3 cursor-pointer">
                      23%
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm mt-1 dark:text-gray-200">
                    Budget
                  </p>
                </div>
                <div className="mt-8">
                  <p>
                    <span className="text-3xl font-semibold">$48,392</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-1 ">Expense</p>
                </div>
                <div className="mt-5 dark:bg-secondary-dark-bg">
                  <SparkLine
                    currentColor={currentColor}
                    color={currentColor}
                    id="line-sparkLine"
                    width="250px"
                    height="80px"
                    type="Line"
                    data={SparklineAreaData}
                  />
                </div>
                <div className="mt-10">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  ></Button>
                </div>
              </div>

              <div>
                <Stacked width="320px" height="360px"></Stacked>
              </div>
            </div>
          </div>
          <div>
            <div
              className="m-3 p-3 rounded-2xl"
              style={{ backgroundColor: currentColor }}
            >
              <div className="flex items-center justify-center gap-10 ">
                <p className="text-2xl text-white  font-semibold">Earnings </p>
                <div className="">
                  <p className="text-white font-semibold mt-8 text-2xl">
                    $63,897.90
                  </p>
                  <p className="text-gray-200 text-sm pt-1 ">Monthly Revenue</p>
                </div>
              </div>
              <div className="mt-4">
                <SparkLine
                  width="320px"
                  height="100px"
                  color="white"
                  currentColor={currentColor}
                  id="column-sparkLine"
                  data={SparklineAreaData}
                  type="Column"
                />
              </div>
            </div>

            <div
              className="m-3 p-8 bg-white rounded-2xl flex dark:text-gray-200
            justify-center items-center gap-10 md:w-400 dark:bg-secondary-dark-bg  "
            >
              <div>
                <p className="text-xl font-bold ">$43,326</p>
                <p className="text-gray-400  ">Yearly Sales</p>
              </div>
              <div className="w-40">
                <Pie
                  id="chart-pie"
                  height="160px"
                  data={ecomPieChartData}
                  legendVisibility={false}
                  fontSize="14px"
                ></Pie>
              </div>
            </div>
          </div>

          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
            rounded-2xl  md:w-760 "
          >
            <div className="flex  gap-2 mb-10 justify-between">
              <div className="md:w-full overflow-auto  ">
                <Area />
              </div>
            </div>
          </div>

          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6
            rounded-2xl  md:w-760 "
          >
            <div className="flex  gap-2 mb-10 justify-between">
              <p className="text-xl font-semibold mt-10 mb-10">
                Sales Overview
              </p>
              <br />
              <div className="md:w-full overflow-auto  mt-10">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
