import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;

  & + & {
    margin-top: 12px;
  }
`;
