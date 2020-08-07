import React from 'react';
import './styles.css'
export default class Nav extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <h2>Home</h2>
                <ul>
                    <li><button>Projects</button></li>
                    <li><button>Education</button></li>
                    <li><button>Skills</button></li>
                    <li><button>About</button></li>
                </ul>
            </div>
        )
    }
}