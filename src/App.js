import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
    super(props);
    //this.state = {file: '',imagePreviewUrl: ''};
    this.state = {file: '',imagePreviewUrl: '',value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Please check your console window');
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleUpload(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } 

    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <br/><br/>
        <div className="first-div">
          <form onSubmit={this.handleSubmit}>
          <label>
            Enter Your Name:
            
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br/><br/>
          <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="second-div">
          <form onSubmit={(e)=>this.handleUpload(e)}>
            
            <label> Upload Prescription: </label>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this.handleImageChange(e)} />

            <button className="uploadButton" 
              type="submit" 
              onClick={(e)=>this.handleUpload(e)}>Upload Image</button>

            <div className="imgPreview">
              {$imagePreview}
            </div>
          </form>
          
        </div>
        
      </div>
    )
  }
}

export default App;
