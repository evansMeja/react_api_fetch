import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


export default class App extends React.Component { 
  render() {
    return (
  <div id="main"> 
    <div className="container justify-content-center">
      <h4 className='p-2 bg-primary text-white m-3 text-center rounded-pill'>Simple App to load React API Data</h4>
  

      <Router>
      <div>

        <div className='row'>
          <div className='col-6'><a  className='form-control bg-primary text-white text-center font-weight-bold'><Link to="/">General</Link></a></div>
          <div className='col-6'><a className='form-control bg-primary text-white  text-center font-weight-bold'><Link to="/about">Json Data Table</Link></a></div>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


      <div id="result"></div>
    </div> 
  </div> 
    );
  };

}

async function Load_datar(param) {
  const url = "https://api.jsonbin.io/b/5f535c74514ec5112d16b12b" 
  const response = await fetch(url,{headers : {"secret-key":"$2b$10$RQO02/Ctj0ySqojfqfFKAuu3zdMaCY1oYLQSj.XRZRMkR54vReUdu"}}); 
  const data = await response.json();
  console.log(data);
  if(param == 0){
    document.getElementById("result").innerHTML=JSON.stringify(data);
  }else{

    console.log(data)
    var s1 = "oem_id : "+data['oem_id']+"<br>"
    var s2 = "oem_logo : "+data['oem_logo']+"<br>"
    var s3 = "oem_name : "+data['oem_name']+"<br>"
    var s4 = "oem_type : "+data['oem_type']+"<br>"

    var l_string = s1 + s2 + s3 + s4
    l_string = l_string +  "<h1 className='jumbotron'>Addresses Information</h1>"
    var in_string1 = "House Number : "+data['address'][0]['house_no']+"<br>"
    var in_string2 = "Building Number : "+data['address'][0]['building_no']+"<br>"
    var in_string3 = "City : "+data['address'][0]['city']+"<br>"
    var in_string4 = "Country : "+data['address'][0]['country']+"<br>"
    var in_string5 = "flat name : "+data['address'][0]['flat_name']+"<br>"
    var in_string6 = "Landmark : "+data['address'][0]['landmark']+"<br>"
    var in_string7 = "State: "+data['address'][0]['state']+"<br>"
    var in_string8 = "Addresses : "+data['address'][0]['street']+"<br>"
    l_string = l_string + in_string1 + in_string2 + in_string3 + in_string4 + in_string5 + in_string6 + in_string7 + in_string8

    l_string = l_string + "<h1>Contact Information</h1>"

    in_string1  = "title : "+ data['contactInfo'][0]['title']+ "</br>"
    in_string2  = "alternate_no : "+ data['contactInfo'][0]['alternate_no']+ "</br>"
    in_string3  = "designation : "+ data['contactInfo'][0]['designation']+ "</br>"
    in_string4  = "emp_id : "+ data['contactInfo'][0]['emp_id']+ "</br>"
    in_string5  = "family_name : "+ data['contactInfo'][0]['family_name']+ "</br>"
    in_string6  = "first_name : "+ data['contactInfo'][0]['first_name']+ "</br>"
    in_string7  = "landline_no : "+ data['contactInfo'][0]['landline_no']+ "</br>"
    in_string8  = "last_name : "+ data['contactInfo'][0]['last_name']+ "</br>"
    var in_string9  = "middle_name : "+ data['contactInfo'][0]['middle_name']+ "</br>"
    var in_string10  = "mobile_no : "+ data['contactInfo'][0]['mobile_no']+ "</br>"
    var in_string11  = "sur_name : "+ data['contactInfo'][0]['sur_name']+ "</br>"

    l_string = l_string + in_string1 + in_string2 + in_string3 + in_string4 + in_string5 + in_string6 + in_string7 + in_string8  + in_string9 + in_string10 + in_string11

    l_string = l_string + "<h1>productMasterRequestBean</h1>"

    in_string1  = "oemMasterId : "+ data['productMasterRequestBean'][0]['oemMasterId']+ "</br>"
    in_string2  = "oemSubsidiaryId : "+ data['productMasterRequestBean'][0]['oemSubsidiaryId']+ "</br>"
    in_string3  = "procuct_name : "+ data['productMasterRequestBean'][0]['procuct_name']+ "</br>"
    in_string4  = "productCategory : "+ data['productMasterRequestBean'][0]['productCategory']+ "</br>"
    in_string5  = "product_description : "+ data['productMasterRequestBean'][0]['product_description']+ "</br>"
    in_string6  = "product_id : "+ data['productMasterRequestBean'][0]['product_id']+ "</br>"
    in_string7  = "landline_no : "+ data['productMasterRequestBean'][0]['landline_no']+ "</br>"
    in_string8  = "product_logo : "+ data['productMasterRequestBean'][0]['product_logo']+ "</br>"
    in_string9  = "product_model : "+ data['productMasterRequestBean'][0]['product_model']+ "</br>"
    in_string10  = "mobile_no : "+ data['productMasterRequestBean'][0]['mobile_no']+ "</br>"
    in_string11  = "producy_type : "+ data['productMasterRequestBean'][0]['producy_type']+ "</br>"

    l_string = l_string + in_string1 + in_string2 + in_string3 + in_string4 + in_string5 + in_string6 + in_string7 + in_string8  + in_string9 + in_string10 + in_string11
    
    document.getElementById("result").innerHTML=l_string;
  }

  return 1;
  
} 

function Home() {
  Load_datar(0)
  return <h2>Home</h2>;
}

function About() {
  Load_datar(1)
  return <h2>API Details</h2>;
}
