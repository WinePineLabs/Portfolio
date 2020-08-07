import React from 'react'
import Navbar from './nav.js'
import Home from './home.js'

import './styles.css'
export default class Background extends React.Component{
    render(){
        return(
            <div className="background">
                <div className="black-layer">
                    <Navbar />
                    <Home />
                </div>
            </div>
        )
    }
}