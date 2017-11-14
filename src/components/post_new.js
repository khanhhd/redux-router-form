import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PostNew extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts">
            Post list
          </Link>
        </div>
        Post new!
      </div>
    )
  }
}

export default PostNew;