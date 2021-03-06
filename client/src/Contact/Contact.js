import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import './Contact.css'
import { withGlobalData } from '../GlobalData.js';


class Contact extends Component {

    constructor(){
        super()
        this.state= {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
    }
    
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    
    handleSumbit = e => {
        e.preventDefault()
        this.props.postContactInfo(this.state)
        this.setState({ firstName: '',
        lastName: '',
        email: '',
        message: ''
    })
}

render() {
    console.log(this.props)
        return (
            <div>
                <Navbar/>
                <h1 className='contactTitle'>Let's Chat,</h1>
                <h3 className='contactTitle'>Fill out the form below and I'll reach out shortly!</h3>
                <div className='formDiv'>
                    <form className='contactForm' onSubmit={this.handleSumbit}>
                        <input placeholder='First Name' type='text' name='firstName' value = {this.state.firstName}  onChange = {this.handleChange} required/>
                        <input placeholder='Last Name' type='text' name='lastName' value = {this.state.lastName} onChange ={ this.handleChange} required/>
                        <input placeholder='E-mail' type='email' name='email' value = {this.state.email} onChange = {this.handleChange} required/>
                        <input type='text' placeholder='Message' name='message' value = {this.state.message} onChange = {this.handleChange} required style={{height: 55, width: 120, textAlign: "center"}}/>
                        <button> Send </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withGlobalData(Contact);