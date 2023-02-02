import React from 'react'

import { BtnStyle } from './button-style';

interface ButtonProps {
    LoadingButton: boolean;
    text: string;
    type?: button;
    onClick?: (e: { preventDefault: () => void }) => void;
}
type button = "button" | "submit" | "reset" | undefined;

export const Button = ( props:ButtonProps ):JSX.Element => {

    
    return (    
    <BtnStyle type={props.type ?? "submit" } disabled={props.LoadingButton} onClick={props.onClick}>
    {props.LoadingButton ? 'Loading...' : props.text}</BtnStyle>

    )

}
