import React, { Component } from 'react';

class DemoForm extends Component {
    constructor(props){
        super(props);
        console.log('Props: ', props)
        this.state = {
            email: props.email || '',
            password: '',
            name: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    //new way of binding object to event
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted: ', this.state)

        this.setState({
            email: '',
            password: '',
            name: '',
        })
    }

    handleChange(event){
        console.log('Input Value: ', event.target.value);
        console.log('Input Name: ', event.target.name);
        //console.dir(event.target)  to log out and see a dom element and all the things about it

        this.setState({
            [event.target.name]: event.target.value
        });

        // switch(event.target.name){
        //     case 'email':
        //         this.setState({email: event.target.value});
        //         break;
        //     case 'name':
        //         this.setState({name: event.target.value});
        //         break;
        //     case 'password':
        //         this.setState({password: event.target.value});
        //         break;
        // }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Demo Form</h1>
                <div>
                    <label>Email </label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name='email'
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label>Name </label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name='name'
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label>Password </label>
                    <input
                        type="text"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'
                    />
                </div>
                <button>Submit Form</button>
            </form>
        )
    }
}

export default DemoForm;
