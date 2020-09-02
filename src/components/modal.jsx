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
    const {
      editMode,
      addMode,
      removeMode,
      taskId,
      tasks,
      readMode,
    } = this.props;
    let currentTask = {};
    if (
      this.props.removeMode === true ||
      this.props.editMode === true ||
      this.props.readMode === true
    )
      currentTask = tasks.find((task) => task.id === taskId);
    return (
      <>
        {removeMode && (
          <Modal
            show={this.state.showModal}
            size="sm"
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Remove Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure to remove *{currentTask.name}*</p>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.handleDelete}
              >
                Confirm
              </button>
            </Modal.Footer>
          </Modal>
        )}
        {editMode && (
          <Modal
            show={this.state.showModal}
            size="md"
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TaskForm
                editTask={this.handleEdit}
                task={currentTask}
                editMode={true}
              />
            </Modal.Body>
          </Modal>
        )}
        {addMode && (
          <Modal
            show={this.state.showModal}
            size="md"
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TaskForm addNewTask={this.handleAdd} addMode={true} />
            </Modal.Body>
          </Modal>
        )}
        {readMode && (
          <Modal
            show={this.state.showModal}
            size="md"
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>View Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TaskForm
               
                task={currentTask}
                readMode={true}
              />
            </Modal.Body>
          </Modal>
        )}
      </>
    );
  }
}

export default Modall;
