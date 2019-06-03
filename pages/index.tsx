import Button from '@material-ui/core/Button';
import React from 'react';

export default class C extends React.Component {
  onClick() {
    fetch("http://localhost:3332/user/1")
      .then(res => console.log(res))
  }
  render() {
    return <Button variant="contained" color="primary" onClick={this.onClick}>
      Welcome to next.js!
    </Button>
  }
}