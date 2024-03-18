import React from "react";
import styled from "styled-components";
import { ListItem } from "../components";

export default function Footer() {
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background: #031c3f;
  `;

  const Box = styled.div`
    flex-basis: 450px;
    margin-top: 3%;
  `;

  const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3%;
    flex-basis: 200px;
  `;

  const Text = styled.div`
    color: white;
    margin-top: 0.5em;
  `;

  const Logo = styled.div`
    display: flex;
    align-items: center;
  `;

  const Title = styled.span`
    font-size: 2em;
    font-weight: 700;
    margin-left: 0.5em;
    color: red;
  `;

  const Heading = styled.h1`
    color: white;
  `;

  const Line = styled.div`
    height: 3px;
    background: red;
    margin: 0.5em 0 1em 0;
  `;

  const Credits = styled.div`
    background: #031c3f;
    border-top: 1px solid white;
    color: white;
    padding: 1em;
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <Container>
        <Box>
          <Logo>
            <img src="/globe.jpg" alt="#" width="75" height="75" />
            <Title>
              Vocational <br />
              Training International
            </Title>
          </Logo>
          <Text>
            With a commitment to excellence, we proudly offer a comprehensive
            range of welding services tailored to meet the diverse needs of our
            clients.
          </Text>
        </Box>
        <List>
          <Heading>Hours</Heading>
          <Line />
          <Text>Monday - Friday</Text>
          <Text>8am - 8pm PST</Text>
        </List>
        <List>
          <Heading>Contact</Heading>
          <Line />
          <Text>123.456.7890</Text>
          <Text>Perris, CA</Text>
          <Text>test@test.com</Text>
        </List>
      </Container>
      <Credits>
        Proudly Powered By: &nbsp;{" "}
        <ListItem dark={true} text="Holy Mountain Engineering" />
      </Credits>
    </>
  );
}
