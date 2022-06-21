import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SearchProducts = ({busca}) => {

    const [products, setProducts] = useState([]);

    const buscaComp = busca.toLowerCase().trim();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (err) {
            }
        };
        getProducts();
    });

    let produtosFiltrados = '';

    if(!buscaComp) {
        produtosFiltrados = products;
    } else {
        produtosFiltrados = products.filter((produto) => {
            const nomeProduto = produto.tittle.toLowerCase().trim();
            return nomeProduto.includes(buscaComp)
        });
    }

    return (
        <Container>
            {produtosFiltrados.slice(0, produtosFiltrados.length).map((item) => <Product item={item} key={item.id}/>)}
        </Container>
    );
};
export default SearchProducts;
