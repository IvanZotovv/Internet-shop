/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import { createItem, getURL } from '../../redux/app-redux';
import fb from '../Firebase/fb';


const ChekoutMainBlock = styled.div`
  width: 90%;
  margin: auto;
`;
const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong>
          {user.uid }
        </span>
        <span>
          <strong>E-Mail:</strong>
          {user.email}
        </span>
        <span>
          <strong>Username:</strong>
          {user.username}
        </span>
      </li>
    ))}
  </ul>
);

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: item => dispatch(createItem(item)),
  };
};

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loading: false,
      users: [],
      title: '',
      price: '',
      img: '',
      description: '',

    };
  }

  // componentDidMount() {
  //   this.setState({ loading: true });


  //   console.log(this.props.firebase);

  //   this.props.firebase.users().on('value', (snapshot) => {
  //     const usersObject = snapshot.val();
  //     console.log(usersObject);
  //     const usersList = Object.keys(usersObject).map(key => ({
  //       ...usersObject[key],
  //       uid: key,
  //     }));

  //     this.setState({
  //       loading: false,
  //       users: usersList,
  //     });
  //   });
  // }

  // componentWillUnmount() {
  //   this.props.firebase.users().off();
  // }

  handleChange = (e) => {
    e.target.id === 'img' ? this.setState({
      img: e.target.files[0],
    })
      : this.setState({
        [e.target.id]: e.target.value,
      });
  };

  // handleUpload = (e) => {

  // }

  handleSubmit = (e) => {
    e.preventDefault();
    const { img } = this.state;

    const storageRef = fb.storage().ref(`items/${img}`);
    const mainImage = storageRef.child(img.name).put(img);
    mainImage.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    }, (error) => {
      console.log(error);
    }, () => {
      mainImage.snapshot.ref.getDownloadURL().then((downloadURL) => {
        this.setState({
          img: downloadURL,
        });
        this.props.createItem(this.state);
      });
    });

    console.log(this.state);
  }

  render() {
    const { users, loading } = this.state;

    return (
      <ChekoutMainBlock>
        <h1>Admin</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h5>Create a New Project</h5>
            <div>
              <input type="text" id="title" onChange={this.handleChange} />
              <label htmlFor="title">Project Title</label>
            </div>
            <div>
              <input id="price" onChange={this.handleChange}></input>
              <label htmlFor="price">Price</label>
            </div>
            <div>
              <input type="text" id="description" onChange={this.handleChange}></input>
              <label htmlFor="description">Description</label>
            </div>
            <div>
              <input type="file" id="img" onChange={this.handleChange}></input>
              <label htmlFor="image">Image</label>
            </div>
            <div>
              <button >Create</button>
            </div>
          </form>
        </div>
        {/* {loading && <div>Loading ...</div>}

        <UserList users={users} /> */}
      </ChekoutMainBlock>
    );
  }
}


export default connect(null, mapDispatchToProps)(withFirebase(AdminPage));
