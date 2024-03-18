import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ListItem({ text, dark }) {
  const navigate = useNavigate();

  const ListItem = styled.a`
    &:hover {
      cursor: pointer;
      color: ${({ theme: { listItem } }) =>
        dark ? listItem.dark.primary : listItem.light.primary};
    }
    color: ${({ theme: { listItem } }) =>
      dark ? listItem.dark.text : listItem.light.text};
    transition: all 0.3s ease-in-out;
  `;

  return (
    <ListItem onClick={() => navigate(`/${text.toLowerCase()}`)}>
      {text}
    </ListItem>
  );
}
