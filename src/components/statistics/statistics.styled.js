import { styled } from "styled-components";


export const Statisticsbox = styled.section`
    background-color: white;
    padding-top:8px;
    width:80%;
    margin:0 auto;
    border-radius:6px;
    margin-bottom:50px;

   li:last-Child {
    border-bottom-right-radius: 6px;
   }

   li:first-Child {
    border-bottom-left-radius: 6px;
   }

    h2 {
        text-align:center;
         margin-top: 0;
         margin-bottom: 10px;
         text-transform: uppercase;
    }

    ul {
        list-style:none;
        display: flex;
        width: 100%;
        padding:0;
        margin:0;
    }

`


