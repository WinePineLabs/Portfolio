import React from 'react'
import './styles.css'

export default class Home extends React.Component{
    render(){
        return(
            <div className='home'>
                <h1>Basit <br/> Saeed </h1>
                <h2 className='white'>Front-End </h2><h2 className='brown'>Engineeer</h2><h2 className='white'> & Open Source</h2><h2 className='brown'> Contributor</h2>
            </div>
        )
    }
}