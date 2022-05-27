import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
	${mobile({ margin: "0px 20px", diplay: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
	const location = useLocation();
	const cat = location.pathname.split("/")[2];
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState("newest");
  
	const handleFilters = (e) => {
	  const value = e.target.value;
	  setFilters({
		...filters,
		[e.target.name]: value,
	  });
	};
  
	return (
	  <Container>
		<Navbar />
		<Announcement />
		<Title>{cat}</Title>
		<FilterContainer>
		  <Filter>
			<FilterText>Filter Products:</FilterText>
			<Select name="type" onChange={handleFilters}>
			  <Option disabled>Categorias</Option>
			  <Option>creatina</Option>
			  <Option>bcaa</Option>
			  <Option>suplemento</Option>
			  <Option>calça</Option>
			  <Option>camiseta</Option>
			  <Option>tenis</Option>
			  <Option>halter</Option>
			</Select>
			<Select name="brand" onChange={handleFilters}>
			  <Option disabled>Marca</Option>
			  <Option>integral</Option>
			  <Option>darkness</Option>
			  <Option>max titanium</Option>
			  <Option>veneno</Option>
			  <Option>adidas</Option>
			  <Option>nike</Option>
			</Select>
		  </Filter>
		  <Filter>
			<FilterText>Sort Products:</FilterText>
			<Select onChange={(e) => setSort(e.target.value)}>
			  <Option value="newest">Recentes</Option>
			  <Option value="maior">Preço maior</Option>
			  <Option value="menor">Preço menor</Option>
			</Select>
		  </Filter>
		</FilterContainer>
		<Products cat={cat} filters={filters} sort={sort} />
		<Newsletter />
		<Footer />
	  </Container>
	);
  };

export default ProductList;