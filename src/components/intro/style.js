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
    height: 21vh;
    width: 8.3vw;
    text-align: center;
    position: relative;

    font-size: 50px;
    color: white;

    .motion-box {
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    


@-webkit-keyframes gogogo {
    0%{
        background-position: 0 50%;
     }
     50%{
        background-position: 100% 50%;

     }
     100%{
        background-position: 0 50%;
     }
 
 
}


`

export const IntroMiddle = styled.div`
    .hello-wrapper {
        font-size: 3.5vw;
        color: white;    

        font-family: "play-google";
    }

    .hello-1 {
        display: inline-block;
        color: transparent;
        background: linear-gradient(to left top, yellow, #0099ff, red);
        background-size: 300% 300%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-animation: gogogo 5s ease infinite;
    }
    .hello-2 {
        
        display: inline-block;
        font-family: "play-google";
        
    }

    .name-wrapper {
        font-size: 8.3vw;
        font-family: "play-google";
        color: white;
        text-align: center;
        .name {
            display: inline-block;
        }
        .space {
            width: 5vw;
            display: inline-block;
        }
    }



`

export const IntroBottom = styled.div`

    flex: 1;
    position: relative;
    width: 100vw;

    
    .logo {
        position: absolute;
        width: 50px;
        height:50px;
    }
    .button {
        display: block;
        width: 100%;
        height: 100%;
    }

`