import React from 'react'
import "./styles.css"

    class Button extends React.Component{
        
        render(){
            return (

             <div className = "container" >
                
                 <div className = "button-login">
                 

                 <button onClick={this.login} className="Login">Login</button>

                 </div>

             </div>
                
            )
        }
    }


export default Button