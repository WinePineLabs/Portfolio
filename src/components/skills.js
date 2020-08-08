import React from 'react'

export default class Skills extends React.Component{
    render(){
        return(
            <div className='skillswhole'>
                <div className='languages'>
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>C++</li>
                    </ul>
                </div>
                <div className='tools'>
                    <h1>Tools</h1>
                    <ul>
                        <li>VS Code</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        )
    }
}