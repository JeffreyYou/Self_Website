import styled from "styled-components";
import backgroundImage from '../../assets/images/picture03.jpg';
import projectImage from '../../assets/images/picture09.png';
// import OpenAiImage from '../../assets/images/openai.png';
import WebsiteImage from '../../assets/images/website.jpg';
import FTPImage from '../../assets/images/ftp.jpg';
import AICharacterImage from '../../assets/images/ai_character.jpg';
import OpenAiSDKImage from '../../assets/images/sdk.png';
export const WorkWrapper = styled.div`
    background-image: url(${backgroundImage});
    width: 100vw;
    height: 100vh ;
    background-size: cover;
    background-position: 0% 30%;
    display: flex;
    align-items:center;
    flex-direction: column;


    /* transition: background-image 2s ease-in-out; */
    /* background-color: black; */
` 
export const Indent1 = styled.div`
    width: 100vw;
    height: 8vh ;
    min-height: 100px;

` 
export const Title = styled.div`
    font-size: 6vw;
    /* font-size: 140px; */
    color: white;
    font-family: "play-google";
    margin-bottom:5vh;

` 
export const WorkCenter = styled.div`
    width: 70vw;
    height: 60vh ;
    /* background-color: grey; */
    border-radius: 30px;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;

    .motion-div {
        width: 100%;
        height: 45%;
        display: flex;
        justify-content: space-between;
    }
    .a-link{
        display: box;
        width: 30%;
        height: 100%;
        border-radius: 30px;
        border: 1px solid white;
        overflow: hidden;
        text-decoration: none;
        
    }
    .motion-box {
        width: 100%;
        height: 100%;
        z-index: 999;
        background-image: url(${projectImage});
        background-size: cover;
    }

    .open-ai {
        background-image: url(${OpenAiSDKImage});
        background-size: cover;
        background-position: 30% 30%;

    }
    .website {
        background-image: url(${WebsiteImage});
        background-size: cover;
        background-position: 30% 30%;
    }
    .fast-ftp {
        background-image: url(${FTPImage});
        background-size: cover;
        background-position: 30% 30%;
    }
    .ai-character {
        background-image: url(${AICharacterImage});
        background-size: cover;
        background-position: 30% 30%;
    }

` 

export const WorkDemo = styled.div`
    width: 100%;
    height: 100%;
    /* background-image: url(${projectImage}); */
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s ease;

    .text-info {
        color: white;
        font-family: "play-google";
        font-size: 35px;
        /* display: none; */
        transition: opacity 0.9s ease;
        opacity: 0;
        /* visibility: hidden; */
    }
    cursor: pointer;
    &:hover {
        background-color: rgba(33, 202, 127, 0.8);
        .text-info {
            /* display: block; */
            opacity: 1;
            /* visibility: visible; */
        }
    }

` 




