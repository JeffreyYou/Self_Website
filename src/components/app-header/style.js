import styled from "styled-components";

export const AppHeaderWrapper = styled.div`

    width: 50vw;
    height: 60px;

    z-index: 1;
    display: flex;
    justify-content: space-around;
    position:fixed;

    /* border:1px solid; */
    border-radius: 30px;
    box-shadow: 0 0 5px 0.1px;
    /* background: transparent; */
    background:black;
    left: 50%;
    transform: translate(-50%, 0);

`

export const HeaderLeft = styled.div`
    width:15%;
    height:30px;

`
export const HeaderMiddle = styled.div`


    width: 360px;
    height:60px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .topics {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        text-decoration: none;
        border-radius: 20px;
        color: white;
        font-family: Gill Sans, sans-serif;
        font-size: 14px;
        /* background-color: rgba(0, 0, 0, 0.2);
         */
        z-index: 999;
        cursor: pointer;

    }

    .shadow-animation {
        position: absolute;
        background: #1abc9c;

        width: 80px;
        height: 30px;
        border-radius: 30px;
        z-index:998;

        border: 1.5px solid white;
        background: transparent;
        transition: all .2s ease 0s;
    }
    /* background-color: rgba(0, 0, 0, 0.2); */


    .topics:nth-child(1).active ~ .shadow-animation {
        left: 0;
    }
    .topics:nth-child(2).active ~ .shadow-animation {
        left: 92px;
    }
    .topics:nth-child(3).active ~ .shadow-animation {
        left: 184px;
    }
    .topics:nth-child(4).active ~ .shadow-animation {
        left: 276px;
    }
    

`
export const HeaderRight = styled.div`
    width:15%;
    height:30px;
    background-color: #fff;
`

