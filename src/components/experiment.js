import React from 'react'
import Skills from './skills'
import Home from './home'

export default class What extends React.Component{
    state={
        idxx:this.props.idx
    }
    componentDidUpdate(){
        this.updateProp(this.props.idx)
    }
    updateProp=(passed)=>{
        console.log(passed);
        if(this.state.idxx!=passed){

            this.setState({idxx:passed})
        }
    }
    render(){
        if(this.state.idxx===0){
            return(
                <div>
                    <h2>{this.props.yes}</h2>
                    <Home />

                </div>
            )
        }else if(this.state.idxx===3){
            return(
                <div>
                    <h2>{this.props.yes}</h2>
                    <Skills />
                </div>
            )
        }
    }


}