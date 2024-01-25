import styled from "styled-components";

export const InfoWrapper = styled.div`
    font-family: "play-google";
    color: white;

section {
  height: 100vh;
  width: 100vw;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  perspective: 1500px;
}
/* section > div {
  width: 70vw;
  height: 70vh;
  position: relative;
  max-height: 90vh;
  margin: 20px;
  background: var(--white);
  overflow: hidden;
} */
.title {
    position: absolute;
    top: 10vh;
    left: 0;
}
.placeholder {
    width: 70vw;
    height: 70vh;
    border: 1px solid white;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    max-height: 90vh;
    margin: 20px;

}
.text {

}
.progress-bar {
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: #fafafa;
  /* background:red; */
  bottom: 20px;

  background: linear-gradient(to right, #6dd5ed, #2193b0);
  height: 12px;
  border-radius: 5px;
  background-size: 200% 200%;
  animation: movingGradient 2s ease infinite;
}

@keyframes movingGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

`