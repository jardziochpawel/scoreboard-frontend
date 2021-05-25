import React, { useState } from 'react';
import {
    Container,
    Input,
    InputHidden,
    InputGroup,
    ListContainer,
    List,
    ListItem,
    Label,
    Anchor
} from './styles/selectInput';

export default function SelectInput({ label, value, onChange, options, name, ...restProps}){

    const [toSearch, setToSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const selectRef =  React.createRef();

    const toggling = () => {

        setIsOpen(!isOpen);

        if(!isOpen){
            selectRef.current.focus();
        }
        else{
            selectRef.current.blur();
        }
    };
    const handleChange = (item) => {
        setToSearch(item);

    }
    let optionsFilter = options.filter(e => e.label.toLowerCase().includes(toSearch.toLowerCase()));

    return(
        <Container {...restProps}>
            <LabelText>{label ? label : ''}</LabelText>
            <Header name={name}
                    selectRef={selectRef}
                    isOpen={isOpen}
                    onClick={toggling}
                    hiddenValue={value}
                    value={toSearch}
                    onChange={handleChange}
                    onBlur={()  =>  setTimeout(() => {
                        setIsOpen(false);
                    }, 200)}
            >
                { value === '' ? 'Wybierz' : value ? value.label : '' }
            </Header>
            <SIListContainer isOpen={isOpen}>
                <SIList>
                    {optionsFilter.map(item => {
                        console.log(item);
                        return (
                        <SIListItem isActive={item === value} key={item.value} onClick={() => {
                            onChange(item)
                            setToSearch('');
                            toggling();
                        }}>
                            {item.label}
                        </SIListItem>
                    )})}
                </SIList>
            </SIListContainer>
        </Container>
    );
}

const Header = function ({children, name, selectRef, isOpen, value, onChange, hiddenValue, setHiddenValue, ...restProps}){

    return(
        <InputGroup {...restProps}>
            <Input type='text'
                   name={'search-'+name}
                   placeholder={children}
                   value={value}
                   onChange={({target})=>onChange(target.value)}
                   ref={selectRef}
                   />
            <InputHidden type='hidden' name={name} value={hiddenValue} />
            <InputAnchor isOpen={isOpen} />
        </InputGroup>
    );
}

const LabelText = function ({children, ...restProps}){
    return(<Label {...restProps}>{children}</Label>);
}

const SIListContainer = function ({children, ...restProps}){
    return(<ListContainer {...restProps}>{children}</ListContainer>);
}

const SIList = function ({children, ...restProps}){
    return(<List {...restProps}>{children}</List>);
}

const SIListItem = function ({children,  ...restProps}){
    return(<ListItem {...restProps}>{children}</ListItem>);
}

const InputAnchor = function ({...restProps}){
    return(
        <Anchor {...restProps} >
            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="anchor">
                <path
                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>
            </svg>
        </Anchor>
    )
}