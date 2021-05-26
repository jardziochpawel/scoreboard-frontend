import React from "react";
import {
    Button,
    Card,
    CardBackground,
    Container,
    Label,
    Mail,
    Password,
    Title,
    InputGroup,
    IconLock,
    Icon,
    IconMail, SmallText
} from "./style/login";

export default function Login({children, ...restProps}){

    return(<Container {...restProps}>{children}</Container>);
}

Login.Card = function ({children, ...restProps}){

    return(
        <CardBackground>
            <Card {...restProps}>{children}</Card>
        </CardBackground>
    );
}

Login.Title = function ({children, ...restProps}){

    return(<Title {...restProps}>{children}</Title>);
}

Login.InputGroup = function ({children, ...restProps}){

    return(<InputGroup {...restProps}>{children}</InputGroup>);
}

Login.Label = function ({children, ...restProps}){

    return(<Label {...restProps}>{children}</Label>);
}

Login.Mail = function ({ ...restProps}){

    return(<Mail {...restProps} />);
}

Login.Password = function ({ ...restProps}){

    return(<Password {...restProps} />);
}

Login.IconLock = function ({ ...restProps}){

    return(
        <Icon>
            <IconLock {...restProps} />
        </Icon>
    );
}

Login.IconMail = function ({ ...restProps}){

    return(
        <Icon>
            <IconMail {...restProps} />
        </Icon>
    );
}

Login.Button = function ({children, ...restProps}){

    return(<Button {...restProps}>{children}</Button>);
}

Login.SmallText = function ({children, ...restProps}){

    return(<SmallText {...restProps}>{children}</SmallText>);
}