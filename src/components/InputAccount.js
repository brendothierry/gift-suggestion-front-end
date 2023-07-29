import React from "react"
import "../css/InputAccount.css"


class InputAccount extends React.Component {
    
    state = {
        campo: '',
    }

    render() {
        return (
            <div className="container">
                <div title="campo-em-branco">
                    <div className="campo-em-branco">
                        <div label="Campo: * " htmlFor="teste">
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


export default InputAccount