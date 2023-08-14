import { styled } from 'styled-components';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 20px;
  border: 3px solid #c14646;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 300px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 10px;
  height: 40px;

  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;

  background-color: #c14646;
  border: 1px solid #fff;
  border-radius: 10px;
  margin: 0 auto;
`;

export { StyledContactForm, Input, Label, Button };
