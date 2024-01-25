import styled from "styled-components";

export const SkillBarWrapper = styled.div`
    width: 380px;
    height: 100%;
    /* background-color: red; */
    display: inline-block;
    border: 1px solid white;
    /* border-radius: 50px; */

`

export const Title = styled.div`
    font-family: "play-google";
    /* align-items: center; */
    position: relative;


    .svg-wrapper {
        width: 80px;
        height: 110px;
        display: inline-block;
        position: relative;
        .svg{
            position:absolute;
            width: 50px;
            height: 50px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    
    .title-wrapper {
        width: calc(100% - 80px);
        height: 110px;
        display: inline-block;
        /* position: relative; */

        vertical-align: top;
        margin-top: 30px;
        /* background-color: ${props => props.underline }; */

        /* text-align: center; */
        .title {
            font-size: 30px;
            color: white; 
            position: relative;

        }
        .title::after {
            content: "";
            height: 0.2em;
            width: 104%;
            left: -1%;
            background: ${props => props.underline};
            z-index: -1;
            position: absolute;
            bottom: 13.5%;
            /* textDecoration: solid underline #de068d 4px; */
        }
        .tech-stack {
            /* width: 190px; */
            font-size: 24px;
            color: white; 
        }
    }
    
`

export const Content = styled.div`
    color: white; 
    font-family: roboto;
    position: relative;
    height: calc(100% - 140px);


    .skill-wrapper {
        width: 70%;
        position:absolute;
        /* height: 360px; */
        left: 50%;
        transform: translate(-50%, 0);

        .skill {
            height: 100%;
            .skill-inner{
                height: 320px;
            }
        }
        .skill::before {
            content: "<h3>";
            opacity: 0.5;
            color: white;
            display: block;
            margin-left: -35px;
            font-weight: normal;
            font-size: 14px;
        }

        .skill::after {
            content: "</h3>";
            opacity: 0.5;
            color: white;
            display: block;
            margin-left: -35px;
            font-weight: normal;
            font-size: 14px;
        }
    }

    .skill-wrapper::after {
        opacity: 0.3;
        content: '';
        width: 0;
        height: 85%;
        position: absolute;
        background-color: white;
        border: 0.2px solid white;
        top: 18px;
        left: -17px;
    }



`