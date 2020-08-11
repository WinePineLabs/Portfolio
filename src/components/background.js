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
    componentDidUpdate(){
        if(this.state.idx===3){
            document.querySelector('.black-layer-activate').style.background='rgba(0,0,0,0.7)'
        }else{
            document.querySelector('.black-layer-activate').style.background='rgba(0,0,0,0.1)'
        }
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