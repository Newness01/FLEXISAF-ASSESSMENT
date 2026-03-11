import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.primary ? "#4CAF50" : "#333"};
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;