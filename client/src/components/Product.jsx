import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import styled from "styled-components";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {publicRequest} from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {addWhislistProduct} from "../redux/whislistRedux";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({item}) => {

    const id = item._id;
    const quantity = 1;
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch {
            }
        };
        getProduct();
    }, [id]);

    const handleCartClick = () => {
        dispatch(addProduct({...product, quantity}));
    }

    const handleWhislistClick = () => {
        dispatch(addWhislistProduct({...product}));
    }

    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined onClick={() => handleCartClick()}/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined onClick={() => handleWhislistClick()}/>
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;
