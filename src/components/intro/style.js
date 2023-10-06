import styled from "styled-components";

export const IntroWrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const IntroTop = styled.div`
    height: 30%;
    width: 60%;
    text-align: center;
    position: relative;

    font-size: 50px;
    color: white;

    .hello {
        position: absolute;
        display: inline-block;
        left: 0;
        bottom: 0;
        font-family: "play-google";

    }


`

export const IntroMiddle = styled.div`

    font-size: 140px;
    font-family: "play-google";
    color: white;
    text-align: center;
    /* background-color:red; */

`

export const IntroBottom = styled.div`

    flex: 1;

`