import React from 'react'

import { MainTitle } from './style-title'

interface TitleProps {
   text:string
}

export const Title = (props:TitleProps):JSX.Element => {
    return (
    <MainTitle>{props.text}</MainTitle>
    )
}
