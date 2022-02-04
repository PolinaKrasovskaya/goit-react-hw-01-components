import styled from "@emotion/styled";

export const Friends = styled.ul`
list-style: none;
margin: 50px auto;
max-width: 350px;
`

export const FriendItem = styled.li`
display: flex;
align-items: center;
margin-top: 15px;

box-shadow: 1px 1px 1px 1px grey;
height: 120px
`


export const FriendStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
margin: 0 20px;

background-color: ${({ isOnline }) => (isOnline ? "red" : "green")};
`;

export const FriendAvatar = styled.img`
width: 100px;
height: 100px;

border-radius: 10%;
margin-right: 20px;
`;

export const FriendName = styled.p`
font-size: 30px;
font-weight: 500;
`;