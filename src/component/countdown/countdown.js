import React from 'react';
import {Button, Container, Display, Time} from "./style/countdown";

export const Countdown = ({children, ...restProps}) => {

    return(<Container {...restProps}>{children}</Container>)
}

Countdown.Button = function ({children, ...restProps}) {

    return(<Button {...restProps}>{children}</Button>)
}

Countdown.Display = function ({children, ...restProps}) {

    return(<Display {...restProps}>{children}</Display>)
}

Countdown.Time = function ({children, ...restProps}) {

    return(<Time {...restProps}>{children}</Time>)
}
