import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    display: flex;
    border: 1px solid #ccc;
    align-items: center;
    flex-direction: column;
    grid-area: 2 / 4 / 3 / 6;
`
const InfoCarrinho = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-around;
    align-items: center;
`

export default class Carrinho extends React.Component{
    // state = {
    //     carrinho = {
    //         quantidade: 0
    //     }
    // }

    // onClickAddProduto = () => {
    //     this.setState({
    //         quantidade: this.state.quantidade + 1;
    //     })
    // }


 render(){
     return (
         <ContainerCarrinho>
             <h1>Carrinho</h1>
             
             <InfoCarrinho>
                <p>1x</p>
                <p>Produto</p>
                <button>Remover</button>
             </InfoCarrinho>
             <p>Valor Total: R$</p>
         </ContainerCarrinho>
     )
 }

}