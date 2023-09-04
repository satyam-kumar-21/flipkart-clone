import Slide from "./Slide";
import { Box, styled} from "@mui/material";

const MainBox = styled(Box)`
display: flex;
`;

const Left = styled(Box)(({theme}) =>({
width: '83%',
[theme.breakpoints.down('md')]:{
    width: '100%'
}
}))

const Right = styled(Box)(({theme}) =>({
    background: "#FFFFFF",
    padding: 5,
    marginTop: 15,
    marginLeft: 10,
    textAlign: 'center',
    width: '16%',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))


const MidSlide = ({products, title, timer}) => {

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return(
        <>
        <MainBox>
            <Left>
                <Slide products={products} title={title} timer={timer} />
            </Left>
            <Right>
                <img src={adURL} alt="ad" style={{width: 217}}/>
            </Right>
        </MainBox>
        </>
    )
}

export default MidSlide;