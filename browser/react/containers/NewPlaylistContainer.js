import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

class NewPlaylistContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: "",
      disabled: true,
      tooShort: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({
      inputValue: value,
      disabled: ((value.length === 0) || (value.length > 16)) ? true : false,
      tooShort: value.length === 0 ? true : false
    })
  }

  handleSubmit (event) {
    const value = event.target.value;
    event.preventDefault();
    this.props.createPlaylist(this.state.inputValue);
    this.setState({
      inputValue: "",
      disabled: true
    })
  }


  render () {
    const inputValue = this.state.inputValue;
    return (
      <NewPlaylist inputValue={inputValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange} disabled={this.state.disabled} tooShort={this.state.tooShort}/>
    )
  }
}

export default NewPlaylistContainer;
