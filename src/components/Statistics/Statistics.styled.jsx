import styled from '@emotion/styled';

export const SectionStatistics = styled.section `
margin: 50px auto;
height: 150px;
max-width: 300px;

text-align: center;

background-color: white;
`

export const Title = styled.p `
padding: 20px 0;
margin: 0;

text-transform: uppercase;
font-weight: 700;
font-size: 18px;
color: grey;
`

export const StatList = styled.ul `
display: flex;
justify-content: center;
align-items: center;

padding: 0;
margin: 0;
list-style: none;
`
export const StatItem = styled.li `
flex-basis: calc(100% / 5);

display: flex;
flex-direction: column;
justify-content: center;

padding: 12px 0;
margin-top: 22px;
text-align: center;
background-color: ${() => {
    return getRandomHexColor();
  }
};
`

export const ItemLabel = styled.p `
margin: 0;
padding: 0;

font-weight: 500;
font-size: 12px;
color: white;
`

export const ItemPercenage = styled.p `
padding: 0;
margin: 0;

font-weight: 500;
font-size: 18px;
color: white;
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}