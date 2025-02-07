import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 0 16px;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    background: #fff;
    font-size: 16px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;
