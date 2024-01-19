import React from "react"
import "./styles.css"


const InputLogin = ({ placeholder, type, name, value, onChange, className, ...restProps }) => {

    return (
            <div title="Inputlogin">
                <div className="Inputlogin">
                    <div label="Email: * " htmlFor="exempleInputEmail1">
                        <input
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            className={className} // Adicionando a classe fornecida
                        />
                    </div>
                </div>
            </div>
    );
}

export default InputLogin;