import { Box,Button,styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const LeftContainer = styled(Box)`
min-width: 40%;
padding: 40px 0 0 80px;
`;

const ImageProducts = styled('img')({
    padding: '15px 20px',
    border: '1px solid #F0F0F0',
    width: '95%'
});

const StyledButton = styled(Button)`
width: 46%;
height: 50px;
border-radius: 2px;
`;

const ActionItem = ({product}) => {
    return(
        <LeftContainer>
            <ImageProducts src={product.detailUrl} alt="product" />
            <StyledButton variant="contained" style={{marginRight: 10, background: '#ff9f00'}}><ShoppingCartIcon />&nbsp;Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{background: '#fb541b'}}><FlashOnIcon />&nbsp;Buy Now</StyledButton>
        </LeftContainer>
    )
};

export default ActionItem;