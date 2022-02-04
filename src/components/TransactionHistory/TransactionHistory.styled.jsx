import styled from '@emotion/styled'

export const TransactionList = styled.table`
margin: 50px auto;
width: 650px;
height: auto;

box-shadow: 2px 2px 2px 2px grey;
background-color: white;   
`

export const NameContainer = styled.tr`
justify-content: center;

font-weight: 700;
background: #00BFFF;
color: white;
`

export const Data = styled.td`
padding: 5px;
`
export const DataContainer = styled.tbody`
tr:nth-of-type(even) {
    background-color: #F5F5F5;
`