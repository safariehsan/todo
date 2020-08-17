import React, { Component } from "react";
import Table from "../components/table";
import AddTask from "./../components/addTask";
import axios from "axios";

class ToDo extends Component {
  state = {
    tasks: [],
    toggleAdd: true,
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

  handleToggleAdd = () => {
    const displayAddStatus = !this.state.toggleAdd;
    this.setState({
      toggleAdd: displayAddStatus,
    });
  };

  addTask = (temp) => {
    const prevTasks = this.state.tasks;
    prevTasks.push(temp);
    this.setState({
      tasks: prevTasks,
    });

    //this.saveJson(this.state.tasks, "tasklist.json");
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  };

  /*saveJson = (jsonData, filename) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${filename}.json`;
    link.href = url;
    link.click();
  };*/
  
  deleteTask = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.setState({tasks});
  }
  render() {
    return (
      <div className="container">
        <h1>To Do...!</h1>
        <Table tasks={this.state.tasks} handleDelete={this.deleteTask}/>
        <AddTask
          handleToggle={this.handleToggleAdd}
          addVisible={this.state.toggleAdd}
          addNewTask={this.addTask}
        />
      </div>
    );
  }
}

export default ToDo;
