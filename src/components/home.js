import React from 'react'
import './styles.css'

export default class Home extends React.Component{
    
    postion=(e)=>{
        var x=e.clientX;
        var y=e.clientY;
        //console.log(x,y);
        const toBeMoved=document.querySelector('.home').childNodes;
        toBeMoved.forEach((element,idx)=>{
            element.style.marginLeft=`${x/(150*(idx+1))}px`;
            element.style.marginTop=`${y/(150*(idx+1))}px`;
        })
    }

    render(){
        return(
            <div onMouseMove={this.postion} className='home'>
                <h1>Basit <br/> Saeed </h1>
                <div className='description'>
                <h2 className='white'>Front-End </h2><h2 className='brown'>Dev</h2><h2 className='white'> & Open Source</h2><h2 className='brown'> Contributor</h2>
                </div>
            </div>
        )
    }
}