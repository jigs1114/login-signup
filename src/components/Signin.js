import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom';

export default class Signin extends Component {
    regData = JSON.parse(localStorage.getItem('regData'))
    
    constructor(props){
        super(props);
        this.state = {
          email:"",
          password:"",
        } 
        this.onChangeHandler = this.onChangeHandler.bind(this)
       console.log(this.regData); 
      }

      handleSubmit = event =>{
        var mailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        event.preventDefault();
        console.log(this.state)
        let errMsg = ""
        if(this.state.email == ""){
            // alert(1);
            errMsg = "Email ID is required"
            this.setState({errMsg});
        }else if(!this.state.email.match(mailPattern)){
            errMsg = "Email ID is not valid"
            this.setState({errMsg})
          }else if(this.state.password == ""){
            // alert(2)
            errMsg = "Password is required"
            this.setState({errMsg});
        }else{
            console.log(this.state)
            let email = this.state.email
            let password = this.state.password
            if(email == this.regData.email && password == this.regData.password){
                // alert("login Successfully")
                let token = "hjgfjhkfdkhkjhfjjkfjfj"
                localStorage.setItem("token", token)
                this.props.history.push("/dashboard")
            }else{
                errMsg = "Invalid Email and Password."
                this.setState({errMsg});
            }
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
      
      cleanForm = () => {
          this.state.email = "";
          this.state.password = "";
      }

      

        render() {
            return (
            <div className="main">
            <div className="p-3 border shadow rounded">
            <div className="header font-weight-bold py-2 border-bottom">Sign in</div>
            <form className="p-3">
                {this.state.errMsg?<div className="errorMsg rounded">{this.state.errMsg}</div>:''}
                <div className="form-group">
                    <label className="font-weight-bold">Email ID :</label><br />
                    <input className="form-control" name="email" value={this.state.email} onChange={this.onChangeHandler} type="email" placeholder="Email ID" />
                    <small className="text-danger">{this.state.emailErr}</small>
                </div>
    
                <div className="form-group">
                    <label className="font-weight-bold">Password :</label><br />
                    <input className="form-control" name="password" value={this.state.password} onChange={this.onChangeHandler} type="password" placeholder=" Password" />
                    <small className="text-danger">{this.state.passwordErr}</small>
                </div>
    
                <div className="form-group">
                <button className="btn btn-success" onClick={this.handleSubmit} type="submit">Sign in</button>
                </div>
                
            </form>
            
            </div>
            <div className="mt-2">Create a new account?
            <NavLink activeClassName="active" to="/signup">
                <span className="mx-2 text-white pointer">Sign up</span>
            </NavLink>
            </div>
            </div>
            
            
            )
        }
    }
