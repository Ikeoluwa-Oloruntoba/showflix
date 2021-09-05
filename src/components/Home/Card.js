import React from 'react'
import styled from 'styled-components'




export const Container = styled.div `

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: 1200px;
margin-top: 50px ;

`;

export const Card = styled.div `

@media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 1){

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

position: relative;
width: 300px;
height: 370px;
box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(255, 255, 255, 0.1),
  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
border-radius: 15px;
margin:25px;
transition: 0.5s;

.image{
  position: relative;
  width: 300px;
  height: 370px;
border-radius: 15px;
}

.but{
  position: relative;
  bottom:80px;
  color: black;
  font-family: 'Poppins', sans-serif;
  border-radius:25px;
}

}

@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {


  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  left:50px;
  position: relative;
  width: 220px;
  height: 300px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 10px;
  transition: 0.5s;
  
  .image{
    position: relative;
    width: 220px;
  height: 300px;
  border-radius: 15px;
  }
  
  .but{
    position: relative;
    bottom:80px;
    color: black;
    font-family: 'Poppins', sans-serif;
    border-radius:25px;
  }

}
`