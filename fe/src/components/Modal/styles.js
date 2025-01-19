import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 34, 34, 0.6);
  backdrop-filter: blur(3px);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background-color: #fff;

  h1 {
    font-size: 22px;
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 32px;

  .cancel-button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 16px;
  }
`;
