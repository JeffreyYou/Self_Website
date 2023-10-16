import styled from "styled-components";

export const ContactBarWrapper = styled.div`
    position: absolute;
    left: 2%;
    bottom: 3%;
    width: 60px;



    .motion-box {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        position: relative;
        margin-bottom: 10px;
        
        .github {
        position:absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        }
        .github:hover {
            cursor: pointer;
        }
        .linkedin {
            position:absolute;
            width: 25px;
            height: 25px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .linkedin:hover {
            cursor: pointer;

        }
        .gmail {
            position:absolute;
            width: 23px;
            height: 23px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .gmail:hover {
            cursor: pointer;

        }

    }
    .motion-box:hover {
        /* background: linear-gradient(to left top, blue, red); */
        background: linear-gradient(to left top, #ff7a72, #fff59a);
    }

`

