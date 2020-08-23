import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskDetail extends Component {
  state = {
    currentTask: {},
    tasks: []
  };

  componentDidMount() {
    const { id, tasks } = this.props.match.params;
    const db = JSON.parse(tasks);
    let currentTask = db.find((t) => t.id === id);
    this.setState({
      currentTask
    });
  }
  
  render() {
    //console.log(this.state.currentTask);
    const {currentTask} = this.state;
    return (
      <div className="jumbotron">
        <div className="container">
          <h3 className="display-4">{currentTask.name}</h3>
          <p className="lead">
          {currentTask.category}
          <br/>
          {currentTask.date}
          <br/>
          {currentTask.featured}
          </p>
          <hr className="my-4" />
          <p>
          {currentTask.desc}
          </p>
          <p className="lead">
            <Link to="/todo/" className="btn btn-primary btn-lg">
              <i className="fa fa-mail-reply" /> Back to Tasks
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
