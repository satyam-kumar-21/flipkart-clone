import { Box ,  Button, Typography, styled} from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';

const MainBox = styled(Box)`
display: flex;
margin: 0 3% 0 7%;
& > button, & > p ,& > div{
    margin-right:40px;
    align-items: center;
    font-size: 14px;
}
`
const CartButton = styled(Box)`
display: flex;
`

const LoginButton = styled(Button)`
color: #2874f0;
background: #FFFFFF;
text-transform: none;
padding:5px 40px;
border-radius: 2px;
box-shadow: none;
font-weight:600;
height:32px;
`

const CustomButton = () => {
    return(
        <MainBox>
            <LoginButton variant="contained">Login</LoginButton>

            <Typography style={{marginTop: 3 , width:145}}>Become a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>
            <CartButton>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </CartButton>
        </MainBox>
    )
}

export default CustomButton;