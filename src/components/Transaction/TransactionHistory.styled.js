import { styled } from "styled-components"

export const Table = styled.table`
    border-collapse: collapse;
    width:80%;
    margin: 0 auto;
    th {
        background-color: #03fcec
    }
`
export const Head = styled.thead`


`

export const Title = styled.tr`

`

export const TitleValue = styled.th`
    width:calc(100% / 3);
    padding: 10px 0;
    background-color: white;
    
    font-size:16px;
    text-transform:uppercase;

    &:not(:last-Child) {
        border-right: 1px solid #ffffff;
    }
`

export const Tbody = styled.tbody`

`