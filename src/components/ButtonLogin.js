import React from 'react'
import "../css/ButtonLogin.css"

    class ButtonLogin extends React.Component{
        
        render(){
            return (

             <div className = "container" >
                
                 <div className = "buttonlogin">

                 <button onClick={this.entrar} className="Login">Login Now</button>

                 </div>

             </div>
                
            )
        }
    }


export default ButtonLogin