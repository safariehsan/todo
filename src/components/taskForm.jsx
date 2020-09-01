import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class TaskForm extends Component {
  state = {
    id: "",
    name: "",
    date: "",
    category: "",
    featured: false,
    done: false,
    desc: "",
  };
  componentDidMount() {
    const prevTaskData = this.props.task;
    if (this.props.editMode === true) {
      //console.log(prevTaskData.name);
      this.setState({
        id: prevTaskData.id,
        date: prevTaskData.date,
        name: prevTaskData.name,
        desc: prevTaskData.desc,
        done: prevTaskData.done,
        featured: prevTaskData.featured,
        category: prevTaskData.category,
      });
    }
  }
  handleChange(e) {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else this.setState({ [name]: value });
  }
  handleAdd = (e) => {
    e.preventDefault();
    const min = 1;
    const max = 1000;
    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    const newTask = {
      id: rand,
      date: this.state.date,
      name: this.state.name,
      desc: this.state.desc,
      done: false,
      featured: this.state.featured ? true : false,
      category: this.state.category,
    };
    this.props.addNewTask(newTask);
  };
  handleEdit = (e) => {
    e.preventDefault();
    //console.log(this.state.id);
    const editedTask = {
      id: this.state.id,
      date: this.state.date,
      name: this.state.name,
      desc: this.state.desc,
      done: this.state.done ? true : false,
      featured: this.state.featured ? true : false,
      category: this.state.category,
    };
    this.props.editTask(editedTask);
  }
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-group row">
            <label htmlFor="date" className="col-sm-2 col-form-label">
              Date
            </label>
            <div className="col-sm-10">
              <input
                type="datetime-local"
                className="form-control"
                id="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Task Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="desc" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                className="form-control"
                name="desc"
                placeholder="Description"
                value={this.state.desc}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          {this.props.editMode === true ?
           <div className="form-group row">
           <div className="col-sm-2">Done</div>
           <div className="col-sm-10">
             <div className="form-check">
               <input
                 className="form-check-input"
                 type="checkbox"
                 name="done"
                 checked={this.state.done}
                 onChange={this.handleChange.bind(this)}
               />
             </div>
           </div>
         </div>
          : ""}
          <div className="form-group row">
            <div className="col-sm-2">Featured</div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="featured"
                  checked={this.state.featured}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2">Category</div>
            <div className="col-sm-10">
              <select
                value={this.state.category}
                className="form-control"
                name="category"
                onChange={this.handleChange.bind(this)}
              >
                <option value="default">Select Category</option>
                <option value="Business">Business</option>
                <option value="Personal">Personal</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              {this.props.editMode === true ? (
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.handleEdit}
                >
                  Edit Form
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleAdd}
                >
                  Add Form
                </button>
              )}
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default TaskForm;
