import React from 'react'
import Skills from './skills'
import Home from './home'
import Education from './education'
import Projects from './projects'

export default class What extends React.Component{
    state={
        idxx:this.props.idx
    }
    componentDidUpdate(){
        this.updateProp(this.props.idx)
    }
    updateProp=(passed)=>{
        if(this.state.idxx!=passed){

            this.setState({idxx:passed})
        }
    }
    render(){
        if(this.state.idxx===0){
            return(
                    <Home />
            )
        }else if(this.state.idxx===3){
            return(
                    <Skills />
            )
        }else if(this.state.idxx===2){
            return(
                <Education />
            )
        }else if(this.state.idxx===1){
        return(
            <Projects />
        )
    }
    }


}