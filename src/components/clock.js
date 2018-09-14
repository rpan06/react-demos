import React, {Component} from 'react';
import {FormatTime} from './time'

export class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    componentDidMount(){
        setInterval(()=>this.tick(), 1000);
    }

    render(){

        return (
            <div>
                <h1>The time is: <FormatTime time={this.state.time} /></h1>
            </div>
        )
    }

}
