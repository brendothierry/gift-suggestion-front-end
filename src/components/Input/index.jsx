import React from "react";
import "./styles.css";

const Input = ({ placeholder, type, name, value, onChange, className, width, height, ...restProps }) => {

    return (
        <div title="input">
          <div className="input" style={{ width: width, height: height }}>
            <div label="Campo: * ">
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`container ${className}`} // Adicionando a classe fornecida
                style={{ width: width, height: height }} // Repasse as propriedades width e height diretamente ao estilo do input
                {...restProps} // Mantendo e repassando as outras propriedades
              />
            </div>
          </div>
        </div>
    );
  }

export default Input;