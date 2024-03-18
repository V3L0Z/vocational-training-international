import React from "react";
import { Button, List, ListItem } from ".";
import styled from "styled-components";

export default function Header() {
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
  `;

  return (
    <Container>
      <Box>
        <img src="/globe.jpg" alt="#" width="50" height="50" />
        <h4>Vocational Training International, Inc</h4>
      </Box>
      <Box>
        <List>
          <ListItem text={"Home"} />
          <ListItem text={"About"} />
          <ListItem text={"Contact"} />
        </List>
        <Button text="Start Today" />
      </Box>
    </Container>
  );
}
