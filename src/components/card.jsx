import React, { Component } from "react";
import Modall from "./modal";
import { Link } from "react-router-dom";

class Card extends Component {
  state = {
    modal: false,
    taskId: 0,
    editMode: false,
  };
  constructor(props) {
    super(props);
  }
  onEdit = () => {};
  onDelete = (updatedList) => {
    //console.log(updatedList);
    this.props.handleDelete(updatedList);
    this.setState({modal: false})
  };
  onDetail = (taskId) => {
    //window.location = `/todo/detail/${taskId}`;
    this.props.history.push(`/todo/detail/${taskId}`);
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          {this.props.tasks.map((task, index) => (
            <div className="col-sm-4 taskcard" key={index}>
              <div
                className={
                  task.done === true ? "card m-2 bg-light" : "card m-2 bg-light"
                }
              >
                <div className="card-header d-flex">
                  <h5>
                    {task.featured ? (
                      <i
                        className="fa fa-star ml-auto p-2"
                        style={{ color: "orange" }}
                      ></i>
                    ) : (
                      <i className="fa fa-star-o ml-auto p-2"></i>
                    )}
                    {task.name}
                  </h5>
                  <span className="badge badge-secondary ml-auto tskcat">
                    {task.category}
                  </span>
                </div>
                <div className="card-body">
                  <p className="card-text">{task.desc}</p>
                </div>

                <div className="card-footer d-flex">
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => {
                      this.setState({
                        taskId: task.id,
                        modal: true,
                        removeMode: false,
                        editMode: true,
                        addMode: false
                      });
                    }}
                  >
                    <i className="fa fa-pencil" />
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm ml-2"
                    onClick={() => {
                      this.setState({
                        taskId: task.id,
                        modal: true,
                        removeMode: true,
                        editMode: false,
                        addMode: false
                      });
                    }}
                  >
                    <i className="fa fa-trash" />
                  </button>
                  <button
                    className="btn btn-outline-info btn-sm ml-2"
                    onClick={() => this.onDetail(task.id)}
                  >
                    <i className="fa fa-eye" />
                  </button>
                  {/* <Link
                    to={{
                      pathname: `/todo/detail/${task.id}`,
                    }}
                    params={{ tasks: this.props.tasks }}
                    className="btn btn-outline-info btn-sm ml-2"
                  >
                    <i className="fa fa-eye" />
                  </Link> */}
                  <small className="text-muted ml-auto">
                    <i className="fa fa-calendar"></i> {task.date}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
        {this.state.modal === true ? (
          <Modall
            show={true}
            editMode={this.state.editMode}
            addMode={this.state.addMode}
            removeMode={this.state.removeMode}
            taskId={this.state.taskId}
            tasks={this.props.tasks}
            handleDelete={this.onDelete}
            
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Card;
