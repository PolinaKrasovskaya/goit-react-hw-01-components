import styled from '@emotion/styled';

export const ProfileContainer = styled.div `
margin: 50px auto;
max-width: 250px;
height: 315px;

box-shadow: 2px 2px 2px 2px grey;
background-color: white;
`

export const DescriptionContainer = styled.div`
text-align: center;
display: block;
`                        
export const ProfileImg = styled.img `
margin-top: 20px;
width: 100px;

border-radius: 50%; 
`
export const ProfileName = styled.p`
margin: 10px;

font-weight: 700;
font-size: 18px;
`
export const ProfileInfo = styled.p`
margin: 8px;

font-weight: 500;
font-size: 12px;
line-height: 1.19;
color: grey;
`
export const StatsList = styled.ul` 
display: flex;
justify-content: center;
align-items: center;
padding: 0;
margin: 0;
list-style: none;
`
export const StatsItem = styled.li`
flex-basis: calc(100% / 3);

display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

margin-top: 22px;
padding: 20px 0;

background-color: #F0F0F0;
border: 1px solid #E0E0E0;   
`
export const ItemLabel = styled.p`
margin: 0;

font-weight: 500;
font-size: 12px;
color:grey;
`
export const ItemQuantity = styled.span`
font-weight: 500;
font-size: 18px;
`