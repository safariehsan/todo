import React from "react";

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th>#</th>
        <th>Del</th>
        <th>Task</th>
        <th>Done</th>
        <th>Featured</th>
        <th>Date</th>
        <th>Category</th>
        <th>Desc</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
