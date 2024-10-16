import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  Inject,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
//import { DataSource } from "@syncfusion/ej2/diagrams";
const Calendar = () => {
  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white
   text-black rounded-3xl "
    >
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ DataSource: scheduleData }}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        ></Inject>
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
