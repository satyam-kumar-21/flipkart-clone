import { Box, Typography , Grid, styled} from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";

const Container = styled(Grid)`
padding: 30px 135px;
`;

const Header = styled(Box)`
padding: 15px 44px;
`;

const Cart = () => {
    const {cartItems} = useSelector(state => state.cart);
    return (
        <>
        {
            cartItems.length ?
            <Container container>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600}}>My Cart ({cartItems.length})</Typography>
                    </Header>
                    {
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item}/>
                        ))
                    }
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