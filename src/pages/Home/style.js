import styled from "styled-components";
import backgroundImage from '../../assets/images/picture01.jpg';

export const HomeWrapper = styled.div`
    background-image: url(${backgroundImage});
    width: 100vw;
    height: 100vh ;
    background-size: cover;
    background-position: 0% 30%;
    transition: background-image 2s ease-in-out;
    /* background-color: black; */

    /* .bgc {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
    } */

    .go-right {
        position: absolute;

        width: 50px;
        height:50px;
        left: 50%;
        bottom: 5%;
        transform: translate(-50%, 0);
        

        .logo {
            width: 50px;
            height:50px;
        }
    }

`