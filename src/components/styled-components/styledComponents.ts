import styled from "styled-components";

const Container = styled.div`
    padding-left: 8px;
    padding-right: 8px;
    text-align: center;
`;

const CardStyled = styled.div`
    padding: 0px;
    // background-color: #FBFCFC ;
    background-color: #F7F7F7 ;
    border-radius: 40px 0px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
    font-size: 13px;
    // border:solid 0.5px #477084;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border:solid 0.5px #477084;
  }
`;
const ButtonStyled = styled.button`
  background-color: #2E86C1;
  border-radius: 3px;
  border: none;
  &:hover{
    background-color: #13EEEE ;
  }
`;

const Searcher = styled.input`
  padding: 10px;
  margin: 5px;
  border: 0.5px #ccc
  border-radius: 5px;
  font-size:13px;
`;



export { CardStyled, ButtonStyled, Container, Searcher }