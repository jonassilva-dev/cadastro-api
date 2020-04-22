import React from 'react'
import Header from './Header'
import "./Main.css"

export default props =>
    <React.Fragment>
        <Header {...props}/>
            <main className="content col-12 container-fluid ">
                <div className="p-3 mt-3">
                    {props.children}    
                </div>                
            </main>
    </React.Fragment>

