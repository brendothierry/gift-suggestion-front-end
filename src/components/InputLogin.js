import React from "react"
import "../css/InputLogin.css"


class InputLogin extends React.Component {
    state = {
        email: '',
        senha: ''
    }

    render() {
        return (
            <div className="container"> 
                <div title="login">
                    <div className="login">
                        <div label="Email: * " htmlFor="exempleInputEmail1">
                            <input 
                                type="email"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                                id="exampleInputEmail11"
                                aria-describedby="emailHelp"
                                placeholder="Username" />
                        </div>
                        <br></br>
                        <div label="Senha : * " htmlFor="">
                            <input 
                                type="password"
                                value={this.state.senha}
                                onChange={e => this.setState({ senha: e.target.value })}
                                id="exampleInputPassword1"
                                placeholder="Password" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputLogin