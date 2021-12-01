import React from 'react'
import styled from "styled-components";
import foguete from 'C:/Users/SHADOWFIRE/Desktop/Joy-labe-commerce13/labecommerce/src/img/foguete.jpg'

const CardContainer = styled.div`
    display: flex;
    border: 1px solid black;
    width: 250px;
    margin: 8px;
    `;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Imagem =  styled.img `
    width: 250px;
    height: 250px;
`;

class CardProdutos extends React.Component {

    
state = {
    adicionarProduto: false
}

    onClickAddProduto = () =>{
        this.setState({
            adicionarProduto: !this.state.adicionarProduto
        })
        console.log("clicou")
}



render (){
    return (

        <CardContainer>
            <CardInfo>
                <Imagem src={this.props.image} alt={"image"} />
                <p>{this.props.name}</p>
                <p>{this.props.value}</p>
                <button onClick={this.onClickAddProduto}>Adicionar ao carrinho</button>
            </CardInfo>
        </CardContainer>
        
    )
}
}

export default CardProdutos 