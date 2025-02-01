import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
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

  > h1 {
    font-size: 22px;
    color: ${({ theme, $danger }) =>
      $danger ? theme.colors.danger.main : theme.colors.gray[900]};
  }

  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;

  .cancel-button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 16px;

    &:disabled {
      color: ${({ theme }) => theme.colors.gray[100]};
      cursor: default !important;
    }
  }
`;
