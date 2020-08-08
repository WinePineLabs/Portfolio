import React from 'react'
import Navbar from './nav.js'
import Home from './home.js'
import Experiment from './experiment.js'
import './styles.css'
import Skills from './skills.js'
export default class Background extends React.Component{
    state={
        idx:0
    }
    changeCurrent=(newName)=>{
        this.setState({idx:newName.name})
    }
    
    render(){
        return(
            <div className="background">
                <div className="black-layer-activate">
                    <Navbar Changer={this.changeCurrent.bind(this)} />
                    <Experiment idx={this.state.idx}/>
                </div>
            </div>
        )
    }
}