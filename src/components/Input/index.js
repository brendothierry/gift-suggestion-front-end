import React from "react"
import "./styles.css"


class Input extends React.Component {
    
    state = {
        campo: '',
    }

    render() {
        return (
            <div className="container">
                <div title="input">
                    <div className="input">
                        <div label="Campo: * ">
                            <input
                                type="campo"
                                placeholder="Preencher" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Input