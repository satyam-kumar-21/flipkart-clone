import { Box ,  Button, Typography, styled} from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import { useState, useContext } from "react";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const MainBox = styled(Box)(({theme}) => ({
    display: 'flex',
    margin: '0 3% 0 7%',
    '& > *':{
        marginRight:40,
        alignItems: 'center',
        fontSize: 14
    },
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}))

const CartButton = styled(Box)(({theme}) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}))



const LoginButton = styled(Button)`
color: #2874f0;
background: #FFFFFF;
text-transform: none;
padding:5px 40px;
border-radius: 2px;
box-shadow: none;
font-weight:600;
height:32px;
`;

const CustomButton = () => {
    
    const {account, setAccount} = useContext(DataContext);

    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
    }
    return(
        <MainBox>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
                <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
            
            <Typography style={{marginTop: 3 , width:145}}>Become a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>
            <CartButton>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </CartButton>
            <LoginDialog open={open} setOpen={setOpen}/>
        </MainBox>
    )
}

export default CustomButton;