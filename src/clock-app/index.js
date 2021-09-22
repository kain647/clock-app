import React, { useState, useEffect } from "react";
import { BiRefresh } from "react-icons/bi";
import { FaCheckCircle, FaLocationArrow } from "react-icons/fa";
import {
  Container,
  Header,
  QuoteContainer,
  Quote,
  Author,
  ClockContainer,
  Time,
  TimeBox,
  ButtonBox,
  Button,
  Location,
  Stats,
  StatsBox,
  StatsTitle,
  StatsSubtitle,
} from "./styled";

const ClockApp = () => {
  const [data, setData] = useState({});
  const [ipData, setIpData] = useState({});
  const [timeData, setTimeData] = useState({});

  const getQuote = async () => {
    const response = await fetch(`https://api.quotable.io/random`);
    const data = await response.json();
    //console.log(data)
    setData(data);
  };
  const getIp = async () => {
    const response = await fetch(`https://freegeoip.app/json/`);
    const ipData = await response.json();
    //console.log(ipData);
    setIpData(ipData);
  };
  const getTime = async () => {
    const response = await fetch(`http://worldtimeapi.org/api/ip`);
    const timeData = await response.json();
    //console.log(timeData)
    setTimeData(timeData);
  }

  useEffect(() => {
    getQuote();
    getIp();
    getTime();
  }, []);

  const { latitude, longitude, ip  } = ipData;
  const items = [
    {
      title: "IP :",
      subtitle: ip,
    },
    {
      title: "Latitude :",
      subtitle: latitude,
    },
    {
      title: "Longitude :",
      subtitle: longitude,
    },
  ];

  const { content, author } = data;
  const { city, country_code } = ipData;
  const { datetime } = timeData;
  const time = new Date(datetime).toLocaleString().slice(0, -3);
  return (
    <Container>
      <Header>
        <QuoteContainer>
          <Quote>{content}</Quote>
          <Author>{author}</Author>
        </QuoteContainer>
        <BiRefresh onClick={getQuote} />
      </Header>
      <ClockContainer>
        <TimeBox>
          <Stats>
            {items.map((item) => {
              return <Item {...item} />;
            })}
          </Stats>
          <Time>{time}</Time>
          <Location>
            <FaLocationArrow />
            {city} , <span>{country_code}</span>
          </Location>
        </TimeBox>
        <ButtonBox>
          <Button>more</Button>
          <FaCheckCircle />
        </ButtonBox>
      </ClockContainer>
    </Container>
  );
};

const Item = (props) => {
  const { title, subtitle } = props;
  return (
    <StatsBox>
      <StatsTitle>{title}</StatsTitle>
      <StatsSubtitle>{subtitle}</StatsSubtitle>
    </StatsBox>
  );
};

export default ClockApp;
