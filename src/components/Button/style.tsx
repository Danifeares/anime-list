import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 8px;
  background-color: #04d9d9;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  transition: 300ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 3px 2px 5px rgba(255, 251, 251, 0.3);
  }
`;
