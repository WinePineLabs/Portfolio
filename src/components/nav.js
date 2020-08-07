import React from 'react';
import './styles.css'
import burger from '../images/menu.png'
export default class Nav extends React.Component{
    state={
        toggled:false,
        current:'.nothomebutton'
    }
    toggle=()=>{
        const menu=document.querySelector(this.state.current);
        const navitems=document.querySelectorAll('.nav-item');
        if(this.state.toggled){
            navitems.forEach(item=>{
                item.style.animation = "none";
            })
            this.setState({toggled:false,current:'.nothomebutton'});
            menu.className='nothomebutton';
        }else{
            navitems.forEach((item,idx)=>{
                item.style.animation=`comein ${(idx+3)/7}s`
            })
            this.setState({toggled:true,current:'.nothomebutton-active'});
            menu.className='nothomebutton-active'
        }
    }
    render(){
        return(
            <div className='navbar'>
                <div className='homebutton'>
                    <button>Home</button>
                </div>
                <div className='nothomebutton'>
                    <button className='nav-item'>Projects</button>
                    <button className='nav-item'>Education</button>
                    <button className='nav-item'>Skills</button>
                    <button className='nav-item'>About</button>
                </div>
                <div className='toggle-menu'>
                    <button onClick={this.toggle}>
                    <img src={burger} height="30px" alt=""/>
                    </button>
                </div>
            </div>
        )
    }
}