import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  margin-top: 16px;
  margin-bottom: 8px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 16px;
    font-weight: 600;
  }

  img {
    transform: rotate(${({ $orderBy }) => ($orderBy === "asc" ? 180 : 0)}deg);
    transition: transform 0.3s ease-in;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background: #fff;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;

      strong {
        font-weight: 600;
      }

      small {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 4px;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
      }
    }

    span {
      display: block;
      margin-top: 4px;
      color: ${({ theme }) => theme.colors.gray[200]};
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 4px;

    a {
      text-decoration: none;
    }

    button {
      border: 0;
      background: transparent;
    }
  }
`;
