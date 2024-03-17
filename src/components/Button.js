import React from "react";
import styled from "styled-components";

export default function Button({ text }) {
  const Button = styled.button`
    &:hover {
      cursor: pointer;
      background: #850936;
    }
    transition: background 0.5s ease-in-out;
    background: #b50c3b;
    border: 0;
    outline: 0;
    padding: 1em 2em;
    color: white;
    font-weight: 700;
  `;

  return <Button>{text}</Button>;
}
