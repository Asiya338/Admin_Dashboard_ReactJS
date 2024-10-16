import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Toolbar,
  Inject,
  Search,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Employees = () => {
  const { currentColor } = useStateContext();
  // const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white
     text-black rounded-3xl"
    >
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              headerText={item.headerText}
              width={item.width}
              textAlign={item.textAlign}
              field={item.field}
              country={item.country}
              format={item.format}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Employees;
