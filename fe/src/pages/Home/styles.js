import styled from "styled-components";

export const Container = styled.div`
  margin-top: 35px;
`;

export const ListHeader = styled.header`
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

export const ErrorContainer = styled.div`
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

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 0 24px;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  span {
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-all;
  }
`;
