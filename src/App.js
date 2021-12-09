import React from 'react'
// import './App.css';
import CardProdutos from './componentes/CardProdutos'
import styled from "styled-components";
import Filtros from './componentes/Filtros/Filtros';
import Carrinho from './componentes/Carrinho';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;


class App extends React.Component {
  state = {
    minFilter: 0,
    maxFilter: 800000,
    nameFilter: '',
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

    onChangeMinFilter = (event) => {
      this.setState({minFilter: event.target.value})
    }
  
    onChangeMaxFilter = (event) => {
      this.setState({maxFilter: event.target.value})
    }
  
    onChangeNameFilter = (event) => {
      this.setState({nameFilter: event.target.value})
    }

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

      <Filtros
        minFilter={this.state.minFilter}
        maxFilter={this.state.maxFilter}
        nameFilter={this.state.nameFilter}
        onChangeMinFilter={this.onChangeMinFilter}            
        onChangeMaxFilter={this.onChangeMaxFilter}            
        onChangeNameFilter={this.onChangeNameFilter} 
      />

      {novoProduto} 
      
      <Carrinho />

    {/* <p>Quantidade de produtos: 6</p> */}

  </AppContainer>
  )
  }
}
export default App;  







/*----------------------------------------------*/


/*class App extends React.Component {
  state = {
    minFilter: 100,
    maxFilter: 1000,
    nameFilter: 'Produto',
    productsInCart: [
      {
        id: 4,
        name: 'Produto 4',
        price: 10,
        photo: 'https://picsum.photos/200/200?a=4',
        quantity: 1
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 30,
        photo: 'https://picsum.photos/200/200?a=3',
        quantity: 2
      }
    ]
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  render() {
    return (
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        </AppContainer>
    );
  }
}

export default App; */

