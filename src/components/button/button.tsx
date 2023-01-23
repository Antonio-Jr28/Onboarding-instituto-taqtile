import React from 'react'

import { BtnStyle } from './button-style';

interface ButtonProps {
    LoadingButton: boolean;
    onClick: (e: { preventDefault: () => void }) => void;
}

export const Button = ( props:ButtonProps ):JSX.Element => {

    
    return (    
    <BtnStyle type='submit' disabled={props.LoadingButton} onClick={props.onClick}>
    {props.LoadingButton ? 'Loading...' : 'Entrar'}</BtnStyle>

    )

}
