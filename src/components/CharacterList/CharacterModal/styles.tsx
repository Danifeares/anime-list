import styled from "styled-components";

export const ModalChar = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  flex-direction: column;
  background-color: #fff;
  top: 50%;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  width: 500px;
  transform: translate(-50%, -50%);
  left: 50%;
  animation: fadeIn 1s ease;
  align-items: center;
  gap: 16px;
  > span {
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    background-color: #ee4d4d;
    height: 40px;
    width: 40px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    transition: 300ms ease;
    &:hover {
      transform: scale(1.05);
      background-color: #bc3b3b;
    }
  }
  > img {
    width: 30%;
  }
  > p {
    max-height: 150px;
    overflow: auto;
  }

  @keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
  @media screen and (max-width: 540px) {
    width: 280px;
    > img {
      width: 50%;
    }
  }
`