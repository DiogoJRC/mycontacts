import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  img {
    margin-right: 24px;
  }

  strong {
    display: block;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 22px;
  }

  button {
    padding: 16px;
  }
`;
