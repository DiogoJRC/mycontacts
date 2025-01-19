import styled from "styled-components";

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 600;

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    margin-top: 8px;
    font-size: 24px;
  }
`;
