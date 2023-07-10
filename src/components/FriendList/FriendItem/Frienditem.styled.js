import { styled } from "styled-components";


export const Item = styled.li`
    display:flex;
    gap:10px;
    align-items:center;
    mix-widht:150px;
    max-width: 300px;
    padding: 6px 8px;
    margin: 0 auto;
    justyfy-content:center;
    background-color: white;
    border-radius:6px;
    &:not(:last-Child) {
        margin-bottom: 20px;
    }

`

export const Status = styled.span`
 width:15px;
 height:15px;
 border-radius:50%;
 background-color: ${(props) => {return props.isonline == "true" ? "green" : "red" }};
`

export const Name = styled.p`
margin: 0;
font-size: 20px;
`

