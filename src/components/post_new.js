import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


class PostNew extends Component {
  renderTitleField(field) {
    return(
      <div className="form-group">
        <lable>{field.lable}</lable>
        <input className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          lable="Title"
          name="title"
          component={this.renderTitleField}
        />
        <Field
          lable="Tag"
          name="Tag"
          component={this.renderTitleField}
        />
        <Field
          lable="Content"
          name="content"
          component={this.renderTitleField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostNew);