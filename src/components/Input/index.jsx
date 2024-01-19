import React from "react";
import "./styles.css";

const Input = ({ placeholder, type, name, value, onChange, className, ...restProps }) => {

    return (
        <div title="input">
          <div className="input">
            <div label="Campo: * ">
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`container ${className}`} // Adicionando a classe fornecida
                {...restProps} // Mantendo e repassando as outras propriedades
              />
            </div>
          </div>
        </div>
    );
  }

export default Input;