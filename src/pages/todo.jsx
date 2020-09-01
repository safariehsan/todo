import React, { Component } from "react";
import Table from "../components/table";
import Card from "../components/card";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Modall from "./../components/modal";
import paginate from "./../components/paginate";
import Pagination from "./../components/pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";

class ToDo extends Component {
  state = {
    tasks: [],
    viewMode: "card",
    modal: false,
    addMode: true,
    pageSize: 6,
    currentPage: 1
  };
  getTasks = () => {
    if (
      localStorage.getItem("tasks") === null ||
      localStorage.getItem("tasks") === ""
    ) {
      axios
        .get("tasklist.json")
        .then((res) => {
          const tasks = res.data;

          this.setState({ tasks });
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      const tasks = localStorage.getItem("tasks");
      const db = JSON.parse(tasks);
      this.setState({ tasks: db });
    }
  };

  componentDidMount() {
    this.getTasks();
  }

  deleteTask = (taskId) => {
    const removingTask = this.state.tasks.find((task) => task.id === taskId);
    const updatedTasks = _.without(this.state.tasks, removingTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    this.setState({ tasks: updatedTasks });
    toast.error(`${removingTask.name} removed!`);
  };

  addTask = (newTask) => {
    const prevTasks = this.state.tasks;
    prevTasks.push(newTask);
    this.setState({
      tasks: prevTasks,
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    toast.success(`${newTask.name} added!`);
  };

  editTask = (editedTask) => {
    const { tasks } = this.state;
    const editId = tasks.findIndex((t) => t.id === editedTask.id);
    tasks[editId] = editedTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.setState({ tasks });
    toast.info(`${editedTask.name} edited!`);
  };

  handleTableView = () => {
    this.setState({
      viewMode: "table",
    });
  };

  handleCardView = () => {
    this.setState({
      viewMode: "card",
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    const {length} = this.state.tasks;
    const {pageSize, currentPage, tasks, viewMode} = this.state;
    const todolist = paginate(tasks, currentPage, pageSize);
    return (
      <div className="container">
        <h1 className="mt-2">Application...!</h1>
        <ToastContainer />
        <button
          className="btn btn-info btn-md"
          onClick={() => {
            this.setState({ modal: true, addMode: true });
          }}
        >
          <i className="fa fa-plus" /> Add
        </button>
        <div className="btn-group btn-group-toggle ml-2" data-toggle="buttons">
          <label
            className={
              viewMode === "table"
                ? "btn btn-success active"
                : "btn btn-success"
            }
          >
            <input
              type="radio"
              name="options"
              id="tableview"
              onClick={this.handleTableView}
            />
            <i className="fa fa-table mr-2" />
            Table View
          </label>
          <label
            className={
              viewMode === "card"
                ? "btn btn-success active"
                : "btn btn-success"
            }
          >
            <input
              type="radio"
              name="options"
              id="cardview"
              onClick={this.handleCardView}
            />
            <i className="fa fa-th mr-2" />
            Card View
          </label>
        </div>
        {length === 0 ? (
          <Alert variant="danger" className="mt-2">
            No task!
          </Alert>
        ) : viewMode === "table" ? (
          <Table
            tasks={todolist}
            handleDelete={this.deleteTask}
            handleEdit={this.editTask}
          />
        ) : (
          <Card
            tasks={todolist}
            handleDelete={this.deleteTask}
            handleEdit={this.editTask}
          />
        )}
        <Pagination 
          itemsCount={length} 
          pageSize={pageSize} 
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
        {this.state.modal === true ? (
          <Modall
            show={true}
            addMode={this.state.addMode}
            editMode={false}
            removeMode={false}
            handleAdd={this.addTask}
            handleEdit={this.editTask}
            tasks={this.props.tasks}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ToDo;
