import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './jquery-3.5.1.min.js';

export default class App extends React.Component { 
  state = {
    loading: true,
    jsonData: null, 
  };


  async componentDidMount () { 
    const url = "https://api.jsonbin.io/b/5f535c74514ec5112d16b12b/1" 
    const response = await fetch(url,{headers : {"secret-key":"$2b$10$RQO02/Ctj0ySqojfqfFKAuu3zdMaCY1oYLQSj.XRZRMkR54vReUdu"}}); 
    const data = await response.json();
    this.setState({ jsonData: data, loading:false}); 
  } 

  load_data(x) {
    if (this.state.loading){
      x.innerHTML = " loading";
    }else{
      x.innerHTML = " loaded";
      var my_string = JSON.stringify(this.state.jsonData, null, 4)
      x.innerHTML = my_string;
      //console.log(this.state.jsonData['address'][0]['address_line'])
    }
  }

  render() {
    return ( 
      <div> 
        <div className="container justify-content-center">
          <h4 className='p-2 bg-primary text-white m-3 text-center rounded-pill'>Simple App to load React API Data</h4>
          <div className="form-group">
            <button className="btn btn-info form-control" onClick={() => this.load_data(document.getElementById("result"))}>Load Data</button>
          </div>
          <div className="text" id="result"></div>
        </div> 
      </div> 
    );
  };

}