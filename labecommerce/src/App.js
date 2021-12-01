import React from 'react'
// import './App.css';
import CardProdutos from './componentes/CardProdutos'
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
`;



class App extends React.Component {

  state = {
    produto: [
      {
      
      name: "Foguete Apollo",
      value: 'R$ 800.000',
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Surveyor_1_launch.jpg/1200px-Surveyor_1_launch.jpg"
      },

      {
      
      name: "Foguete Júpiter",
      value: 'R$ 700.000',
      image: "https://s2.glbimg.com/yOEumqhOHlJpZ5Vm9scVL4q6c2U=/e.glbimg.com/og/ed/f/original/2021/05/07/capa_foguete_china.jpg"
      },

      {
      
      name: "Ônibus espacial US",
      value: 'R$ 600.000',
      image: "https://veja.abril.com.br/wp-content/uploads/2016/05/atlantis-ultimo-poso-620-original1.jpeg"
      },

      {
      
      name: "Foguete Aeroflap",
      value: 'R$ 800.000',
      image: "https://aeroflap.com.br/wp-content/uploads/2015/10/DFD09.jpg?mrf-size=m"
      },

      {
      
      name: "Ônibus Espacial Netuno",
      value: 'R$ 700.000',
      image: "https://img.olhardigital.com.br/wp-content/uploads/2021/07/Onibus-Espacial-Discovery-em-orbita-se-aproximando-da-Estacao-Espacial-Internacional-em-6-de-julho-de-2006.png"
      },

      {
      
      name: "Ônibus Espacial Saturno",
      value: 'R$ 500.000',
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Space_Shuttle_Discovery_on_its_way_to_Launch_Pad_39A_for_STS-133.jpg"
      }

    ]}


render () {


const novoProduto = this.state.produto.map((produto) => {

  return (
     
    <CardProdutos 
      image={produto.image} 
      name={produto.name}
      value={produto.value}
    />
    
      
  );

}) 

  
return (

  <AppContainer>
    {/* <p>Quantidade de produtos: 6</p> */}
    {novoProduto}

  </AppContainer>
  )
  
  }
}

export default App;
