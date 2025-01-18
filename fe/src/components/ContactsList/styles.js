import styled from "styled-components";

export const Container = styled.div`
  margin-top: 35px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    color: #222;
  }

  a {
    display: inline-block;
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;
