import React from "react";
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({tasks, handleDelete}) => {
  return <table className="table table-striped table-hover table-bordered mt-2">
      <TableHeader />
      <TableBody tasks={tasks} handleDelete={handleDelete}/>
  </table>;
};

export default Table;
