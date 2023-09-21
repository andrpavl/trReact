import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 40px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 82px 20px;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px 20px; */
  list-style: none;
  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;

export const StyledTitle = styled.h1`
  color: #f3f3f3;
  font-size: 64px;
  font-weight: 600;
  line-height: 1.06;
  margin-top: 160px;
  margin-bottom: 80px;
`;

export const StyledTextInput = styled.input`
  color: #f3f3f3;
  font-size: 17px;
  font-weight: 400;
  line-height: 2.6;
  width: 214px;
  height: 26px;

  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.8;

  background-color: inherit;

  margin-right: 8px;

  padding: 14px 24px;

  &::placeholder {
    color: #f3f3f3;
    text-align: left;

    font-size: 17px;

    font-weight: 400;
    line-height: 2.6;
  }
`;

export const StyledSelectInput = styled.select`
  width: 254px;
  height: 56px;

  border-radius: 200px;
  background: #161f37;

  color: #f3f3f3;
  text-align: left;

  font-size: 17px;

  font-weight: 400;
  line-height: 2.6;

  margin-right: 8px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.8;
  padding: 14px 24px;
`;
