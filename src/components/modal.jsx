import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import TaskForm from "./../components/taskForm";
class Modall extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showModal: true,
  };
  handleDelete = () => {
    this.props.handleRemove(this.props.taskId);
    this.setState({ showModal: false });
  };
  handleEdit = (editedTask) => {
    this.props.handleEdit(editedTask);
    this.setState({ showModal: false });
  };
  handleClose = () => {
    this.setState({ showModal: false });
  };
  handleAdd = (newtask) => {
    this.props.handleAdd(newtask);
    this.setState({ showModal: false });
  };
  render() {
    const { editMode, addMode, removeMode, taskId, tasks } = this.props;
    let currentTask = {};
    if (this.props.removeMode === true || this.props.editMode === true)
      currentTask = tasks.find((task) => task.id === taskId);
    return (
      <Modal
        show={this.state.showModal}
        size={removeMode === true ? "sm" : "md"}
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode === true ? "Edit " : ""}
            {addMode === true ? "Add " : ""}
            {removeMode === true ? "Delete " : ""}
            Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {removeMode === true ? (
            <p>Are you sure to remove *{currentTask.name}*</p>
          ) : addMode === true ? (
            <TaskForm addNewTask={this.handleAdd} addMode={true} />
          ) : (
            <TaskForm editTask={this.handleEdit} task={currentTask} editMode={true} />
          )}
        </Modal.Body>

        {removeMode === true ? (
          <Modal.Footer>
            <button
              className="btn btn-danger btn-sm"
              onClick={this.handleDelete}
            >
              Confirm
            </button>
          </Modal.Footer>
        ) : (
          ""
        )}
      </Modal>
    );
  }
}

export default Modall;
