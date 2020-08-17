import React, { Component } from "react";
import _ from 'lodash';

class TableBody extends Component {
  constructor(props){
    super(props);
  }
  onDelete = (task) => {
    const allTasks = this.props.tasks;
    const updatedTasks = _.without(allTasks, task);
    this.props.handleDelete(updatedTasks);
  };
  render() {
    const { tasks } = this.props;
    return (
      <tbody>
        {tasks.map((task, index) => (
          <tr
            key={index}
            className={task.done === true ? "table-success" : "table-secondary"}
          >
            <td>
              <b>{index + 1}</b>
            </td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={() => this.onDelete(task)}>
                <i className="fa fa-trash" />
              </button>
            </td>
            <td>{task.name}</td>
            <td>
              {task.done ? (
                <i className="fa fa-check"></i>
              ) : (
                <i className="fa fa-close"></i>
              )}
            </td>
            <td>
              {task.featured ? (
                <i className="fa fa-star"></i>
              ) : (
                <i className="fa fa-star-o"></i>
              )}
            </td>
            <td>{task.date}</td>
            <td>{task.category}</td>
            <td>{task.desc}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
