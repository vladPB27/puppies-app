import styled from "styled-components";

const ContainerSearch = styled.div`
  font-family: 'Arial';
  width: 60%;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

const InputSearch = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;


export {ContainerSearch,InputSearch}