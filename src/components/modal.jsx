import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import _ from "lodash";
import TaskForm from "./../components/taskForm";

class Modall extends Component {
  state = {
    showModal: true,
  };
  handleDelete = () => {
    const allTasks = this.props.tasks;
    const removingTask = allTasks.find((task) => task.id === this.props.taskId);
    const updatedTasks = _.without(allTasks, removingTask);
    this.props.handleDelete(updatedTasks);
    //console.log("del");
  };
  handleEdit = () => {};
  handleClose = () => {
    this.setState({ showModal: false });
  };
  handleAdd = (newtask) => {
    this.props.handleAdd(newtask);
    this.setState({ showModal: false });
  }
  render() {
    const { editMode, addMode, removeMode, taskId, tasks } = this.props;
    let currentTask = {};
    if (this.props.addMode === false)
      currentTask = tasks.find((task) => task.id === taskId);
    return (
      <Modal
        show={this.state.showModal}
        size={removeMode === true ? "sm" : "md"}
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode === true ? "Edit ":""}
            {addMode === true ? "Add ":""}
            {removeMode === true ? "Delete ":""}
            Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {removeMode === true ? (
            <p>Are you sure to remove *{currentTask.name}*</p>
          ) : addMode === true ? (
            <TaskForm addNewTask={this.handleAdd} />
          ) : (
            <TaskForm edittedTask={currentTask} />
          )}
        </Modal.Body>
        <Modal.Footer>
          {removeMode === true ? (
            <button
              className="btn btn-danger btn-sm"
              onClick={this.handleDelete}
            >
              Confirm
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={this.handleEdit}
            >
              Edit
            </button>
          )}
          <button className="btn btn-default btn-sm" onClick={this.handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Modall;
