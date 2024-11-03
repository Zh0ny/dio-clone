import React from 'react'
import { Controller } from "react-hook-form";

import {InputContainer, InputText, IconContainer, ErrorText } from './styles';

const Input = ({leftIcon, name, control, ErrorMessage, ...rest}) => {
    return (
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) =>  <InputText {...field} {...rest} />}
                />
            </InputContainer>
            {ErrorMessage? <ErrorText>{ErrorMessage}</ErrorText> :  null}
        </>
        
    )
}

export { Input }; 