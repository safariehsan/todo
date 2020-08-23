import React, { Component } from "react";
import _ from 'lodash';
import { Link } from "react-router-dom";

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
            <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => this.onEdit(task)}
                  >
                    <i className="fa fa-pencil" />
                  </button>
                
                  <button
                    className="btn btn-outline-danger btn-sm ml-2"
                    onClick={() => this.onDelete(task)}
                  >
                    <i className="fa fa-trash" />
                  </button>
                  <Link to={`/todo/detail/${index+1}`} params={{ tasks: this.props.tasks }} className="btn btn-outline-info btn-sm ml-2">
                    <i className="fa fa-eye" />
                  </Link>
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
