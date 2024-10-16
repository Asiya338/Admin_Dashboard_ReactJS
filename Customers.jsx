import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Toolbar,
  Inject,
  Edit,
  Sort,
  Selection,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white
     text-black rounded-3xl"
    >
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            if (item.template) {
              <ColumnDirective
                key={index}
                headerText={item.headerText}
                width={item.width}
                textAlign={item.textAlign}
                template={item.template}
              />;
            } else {
              // For non-template fields

              <ColumnDirective
                key={index}
                field={item.field}
                headerText={item.headerText}
                width={item.width}
                textAlign={item.textAlign}
                format={item.format}
                isPrimaryKey={item.isPrimaryKey} // if primary key exists
              />;
            }
          })}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Filter, Sort, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Customers;
