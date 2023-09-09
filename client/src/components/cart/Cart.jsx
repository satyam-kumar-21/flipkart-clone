import { Box, Typography, Grid, Button, styled } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";

const Container = styled(Grid)`
padding: 30px 135px;
background: #fff;
`;

const Header = styled(Box)`
padding: 15px 24px;
background: #fff;
`;

const ButtonWrapper = styled(Box)`
padding : 16px 22px;
background: #fff;
box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top: 1px solid #f0f0f0;
`;

const StyledButton = (Button)`
display: flex;
margin-left: auto;
`;

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header style={{background: '#fff'}}>
                                <Typography style={{ fontWeight: 600 }}>My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton>Place Order</StyledButton>
                            </ButtonWrapper>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView />
                        </Grid>
                    </Container>
                    : <div>
                        Empty ba
                    </div>
            }
        </>
    )
}

export default Cart;