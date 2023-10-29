import styled from "styled-components";
import backgroundImage from '../../assets/images/picture02.jpg';

const navBarHeight = '16px';

export const ExpertiseWrapper = styled.div`
    width: 100vw;
    /* height: calc(100vh - 60px) ; */
    height: 100vh;
    /* background: linear-gradient(to left top, yellow, blue, red); */
    display: flex;
    /* justify-content: center; */
    align-items:center;
    flex-direction: column;

    background: transparent;
    background-image: url(${backgroundImage});
    background-size: 100%;
    background-position: 0% 0%;
    /* transition: background-image 2s ease-in-out; */
`
export const ExpertiseTop = styled.div`
    height: 10vh;
    width: 100vw;
    min-height: 100px;
    /* background-color: grey; */
`
export const ExpertiseContent = styled.div`
    width: 70vw;
    height: 70vh;
    /* background-color: grey; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    /* height: 100vh; */
    background-size: 100%;
    background-position: 0% 30%;
    
`

export const Title = styled.div`
    font-size: 6vw;
    /* font-size: 140px; */
    color: white;
    font-family: "play-google";
    margin-bottom: 7vh;

`

export const List = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    /* background-color: green; */
    
`