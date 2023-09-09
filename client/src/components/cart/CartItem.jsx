import { Typography ,Box, Button, styled} from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from './ButtonGroup'

const Components = styled(Box)`
border-top: 1px solid #f0f0f0;
display: flex;
background: #fff;
`;

const SmallText = styled(Typography)`
color: #878787;
font-size : 14px;
margin-top: 10px;
`;

const Remove = styled(Button)`
margin-top: 20px;
font-size: 16px;
color: #000;
font-weight: 600;
`

const LeftComponent = styled(Box)`
margin: 20px;
display: flex;
flex-direction: column;`

const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    return(
        <>
        <Components>
            <LeftComponent>
                <img style={{width: 200 , height: 200}} src={item.url} alt="item" />
                <GroupedButton />
            </LeftComponent>
            <Box style={{margin: 20}}>
                <Typography >{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller: RetailNet 
                    <Box component= "span"><img style={{width: 50, marginLeft: 10}} src={fassured} alt="flipkart" /></Box>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                <Box component="span" style={{fontSize: 18, fontWeight: 600 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787', }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{item.price.discount}</Box>
            </Typography>
            <Remove>Remove</Remove>
            </Box>
        </Components>
        </>
    )
}

export default CartItem;