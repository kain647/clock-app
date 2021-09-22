import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  background-image: url("background/background.jpg");
  filter: blur(0px);
  padding: 100px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 570px;
  height: 100%;

  svg {
    color: #e7e7e7;
    width: var(--size);
    height: var(--size);
    --size: 35px;
    cursor: pointer;
    :hover {
      animation: loader 1.5s infinite linear;
      transform: translateZ(0);
    }
    @keyframes loader {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }
`;
export const QuoteContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;
export const Quote = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 15px;
  color: #fff;
`;
export const Author = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;
export const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: auto;
`;
export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Time = styled.div`
  display: flex;
  font-size: 100px;
  color: #fff;
`;
export const Location = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-size: 34px;
  color: #fff;
  svg {
    margin-right: 15px;
  }
  span {
    font-weight: 600;
    margin-left: 10px;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  width: 150px;
  height: 50px;
  border-radius: 25px;
  margin-left: auto;
  cursor: pointer;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 30px;
    color: #303030;
  }
  :hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
export const Button = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: 700;
  margin-right: 10px;
`;
export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;
export const StatsBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const StatsTitle = styled.div`
  display: flex;
`;
export const StatsSubtitle = styled.div`
  display: flex;
  margin-left: 10px;
`;
