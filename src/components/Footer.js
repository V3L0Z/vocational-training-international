import React from "react";
import styled from "styled-components";
import { List, ListItem } from "../components";

export default function Footer() {
  const Box = styled.div`
    display: flex;
    justify-content: space-between;
    background: #031c3f;
  `;

  return (
    <Box>
      <div>
        <div>Image</div>
      </div>
      <List>
        <ListItem dark={true} text={"Home"} />
        <ListItem dark={true} text={"About"} />
        <ListItem dark={true} text={"Contact"} />
      </List>
      <div>Search</div>
    </Box>
  );
}
