import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class AddTask extends Component {
  state = {
    name: "",
    date: "",
    category: "",
    featured: false,
    done: false,
    desc: "",
  };
  componentDidMount() {}
  handleToggleAdd = () => {
    this.props.handleToggle();
  };
  handleChange(e) {
    const {name, value, checked, type} = e.target;
    console.log(checked);
    if(type === "checkbox") {
      this.setState({ [name]: checked });
    }
    else this.setState({ [name]: value });
  }
  handleAdd = (e) => {
    const newTask = {
      name: this.state.name,
      date: this.state.date,
      category: this.state.category,
      desc: this.state.desc,
      done: this.state.done ? true : false,
      featured: this.state.featured ? true : false,
    };
    
    e.preventDefault();
    this.props.addNewTask(newTask);
  };
  render() {
    const renderAddForm = {
      display: this.props.addVisible ? "none" : "block",
    };
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-md"
          onClick={this.handleToggleAdd}
        >
          <i className="fa fa-plus" /> Add Task
        </button>
        <form style={renderAddForm}>
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
                id="name"
                placeholder="Task Name"
                name="name"
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
                id="desc"
                name="desc"
                placeholder="Description"
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Status</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="done"
                    name="done"
                    value="done"
                    onChange={this.handleChange.bind(this)}
                  />
                  <label className="form-check-label" htmlFor="done">
                    Done
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="notdone"
                    name="done"
                    value=""
                    onChange={this.handleChange.bind(this)}
                  />
                  <label className="form-check-label" htmlFor="notdone">
                    Not Done
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <div className="col-sm-2">Featured</div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="featured"
                  name="featured"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2">Category</div>
            <div className="col-sm-10">
              <select className="form-control" name="category" onChange={this.handleChange.bind(this)}>
                <option value="choose">Select Category</option>
                <option value="Business">Business</option>
                <option value="Personal">Personal</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.handleAdd}
              >
                Submit Form
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddTask;
