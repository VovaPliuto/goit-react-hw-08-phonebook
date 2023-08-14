import { styled } from 'styled-components';

const StyledContactsList = styled.ul`
  margin: 0;
  padding: 20px 2px;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 450px;
  padding: 10px;
  border: 1px dotted #3700dc;

  & + & {
    margin-top: 1px;
  }
`;

const Text = styled.span`
  width: 180px;
`;

const Number = styled.i`
  margin-left: 10px;
`;

const DeleteBtn = styled.button`
  width: 60px;
  margin-left: 20px;
  border-radius: 8px;
  border: 1px solid #fd7e7e;

  &:active {
    background-color: #fd7e7e;
  }
`;

export { StyledContactsList, ListItem, Text, Number, DeleteBtn };
