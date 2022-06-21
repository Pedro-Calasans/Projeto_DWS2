import React from "react";
import {Badge} from "@material-ui/core";
import {ExitToApp, FavoriteBorder, Search, ShoppingCartOutlined,} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../redux/userRedux";
import LoginIcon from '@mui/icons-material/Login';

const Container = styled.div`
  height: 60px;
  background-color: #195128;
  ${mobile({height: "50px"})}
`;


const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f1f1f1;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  text-align: center;
  flex: 1;
`;

const Logo = styled.span`
  font-size: 25px;
  cursor: pointer;
  font-weight: 700;
  ${mobile({fontSize: "14px"})}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 90%;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  ${mobile({width: "80%"})}
`;

const Input = styled.input`
  border: none;
  margin: auto;
  // width: 100%;
  ${mobile({width: "80%"})}
`;

const Right = styled.div`
  margin-right: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {
    const user = useSelector((state) => state.user.currentUser);

    const quantity = useSelector(state => state.cart.quantity)

    const whislistQunatity = useSelector(state => state.whislist.quantity)

    const dispatch = useDispatch();

    const handlelogout = () => {
        dispatch(logout())
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/">
                        <Logo>Double Biceps</Logo>
                    </Link>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder="Procurar"/>
                        <Search style={{color: "gray", fontSize: "16px"}}/>
                    </SearchContainer>
                </Center>
                <Right>
                    {user ? (
                        <MenuItem>
                            <ExitToApp onClick={() => handlelogout()}/>
                            <Link to="/whislist">
                                <FavoriteBorder/>
                                <Badge badgeContent={whislistQunatity} color="primary"/>
                            </Link>
                        </MenuItem>
                    ) : (
                        <Link to="/login">
                            <LoginIcon></LoginIcon>
                        </Link>
                    )}
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary"/>
                            <ShoppingCartOutlined/>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
