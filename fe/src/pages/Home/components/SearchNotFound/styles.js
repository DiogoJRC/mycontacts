import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  span {
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.gray[200]};

    strong {
      word-break: break-word;
    }
  }
`;
