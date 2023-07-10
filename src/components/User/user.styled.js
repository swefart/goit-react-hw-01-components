
import { styled } from "styled-components";


export const Card = styled.div`
    padding-top:20px;
    margin: 0 auto 50px auto;  
    display:flex;
    flex-direction:column;
    width: 80% ;

    div {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 50px 0 0 0 ;
    background-color: white;
    text-align: center;
    }

    img {
    width: 100px;
    display:block;
    margin:0 auto;
    border-radius:50%;
    }

    ul {
    margin:auto;
    padding: 0;
    list-style: none;
    display: flex;
    width= 100%;
    background-color: #f0f7f6;
    }

    li {
    width: calc(100% / 3);
    padding: 10px;
    border: 1px solid #cbcbcb;

    font-size: 16px;
    text-align: center;
    }
`

export const Username = styled.p`
  font-weight: 500;
  text-decoration: solid;
  color: black;
`

export const SocialLocation = styled.p`
    color: grey;    
`


export const Itemlabel = styled.span`
    display: block;
    color: grey;
    margin-bottom: 6px;
`

export const Itemstats = styled.span`
    display:block;
    font-weight:600;
`
