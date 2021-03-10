import styled from 'styled-components';

export const Form = styled.form`
  /* @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'); */
  
  margin: 50px auto 0 auto;
  width: 100%;
  max-width: 760px;


  input {
    width: 100%;
    height: 60px;
    margin: 0 auto;
    font-size: 25px;
    padding: 0 0 0 40px;
    color: #fff;
    /* font-family: 'Press Start 2P', cursive; */
    border: 0;
    border-radius: 50px;
    background-color: #CE1030;

    &::placeholder{
      font-size: 25px;
      color: #fff;
    }
  }
`;
