import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            password:""
        } 
        this.onChangeHandler = this.onChangeHandler.bind(this)
      }
      handleRegSubmit = event =>{
        var mailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        event.preventDefault();
        console.log(this.state)
        let errMsg = ""
        if(this.state.name == ""){
          errMsg = "Name is required"
          this.setState({errMsg})
        }else if(this.state.email == ""){
          errMsg = "Email is required"
          this.setState({errMsg})
        }else if(!this.state.email.match(mailPattern)){
          errMsg = "Email ID is not valid"
          this.setState({errMsg})
        }else if(this.state.password == ""){
          errMsg = "Password is required"
          this.setState({errMsg})
        }else if(this.state.password.length < 6){
          errMsg = "Password required min 6 character"
          this.setState({errMsg})
        }else{
          console.log(this.state)
          alert('successfully submited')
          this.cleanValidation();
          localStorage.setItem('regData', JSON.stringify(this.state))
          this.props.history.push("/")
        }
        
      }

      onChangeHandler = (event) => {
        const isCheckbox = event.target.name === "checkbox";
        this.setState({[event.target.name]: isCheckbox?event.target.checked:event.target.value})
        this.cleanValidation();
      }
      cleanValidation = () => {
          this.state.errMsg = "";
      }
    render() {
        return (
          <div className="reg-main">
            <div className=" p-3 border shadow rounded">
              <div className="header font-weight-bold py-2 border-bottom">Sign up</div>
              <form className="p-3">
            
              <div className="form-group" >
                    {this.state.errMsg?<div className="errorMsg rounded">{this.state.errMsg}</div>:''}
                    <label className="font-weight-bold">Name :</label><br />
                    <input className="form-control" name="name" value={this.state.name} onChange={this.onChangeHandler} type="text" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label className="font-weight-bold">E-mail :</label><br />
                    <input className="form-control" name="email" value={this.state.email} onChange={this.onChangeHandler} type="email" placeholder="Email ID" />
                </div>
      
                <div className="form-group">
                    <label className="font-weight-bold">Password :</label><br />
                    <input className="form-control" name="password" value={this.state.password} onChange={this.onChangeHandler} type="password" placeholder=" Password" />
                </div>
      
                <div className="form-group">
                  <button className="btn btn-success" onClick={this.handleRegSubmit} type="submit">Sign Up</button>
                </div>

              </form>
            </div>
            <div className="mt-2">Already have an account? 
            <NavLink activeClassName="active" to="/">
              <span className="mx-2 text-white pointer">Sign in</span>
            </NavLink>
            </div>
          </div>
          
        )
    }
}
