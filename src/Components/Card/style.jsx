import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto 0 auto;
  max-width: 910px;
  
`;

export const CartdItem = styled.div`

  max-width: 230px;
  height: 230px;
  background: #F7786B;
  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;

  padding: 20px;
  margin: 10px 20px;
  h2 {
    color: #fff;
    
  }

  img {
    max-width: 100px;
    margin-left: auto;
    transform: translate(10px,10px);
  }

  span {
    display: block;
    background: #fff;
    max-width: fit-content;
    padding: 6px 20px;
    border-radius: 30px;
    margin: 10px 0 0 0px;
  }

`;