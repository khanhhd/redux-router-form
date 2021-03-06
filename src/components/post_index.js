import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';


class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, post => {
      return(
         <li className="list-group-item" key={post.id}>
           {post.title}
         </li>
      );
    })
  }
  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            New Post
          </Link>
        </div>
        <h3>PostIndex</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);