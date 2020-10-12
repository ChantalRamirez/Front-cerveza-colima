import React from 'react';
import './styles/Input.css'

const Input = ({ attribute, handleChange, param }) =>{
    return (
        <div>
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={ (e) => handleChange (e.target.name, e.target.value) }
            className={ param ? 'Input__error':'RegularStyle'}
            />
        </div>
    )
};

export default Input;