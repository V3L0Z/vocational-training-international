import React from "react";
import styled from "styled-components";

export default function List({ children }) {
  const List = styled.ul`
    display: flex;
    gap: 1em;
  `;

  return <List>{children}</List>;
}
