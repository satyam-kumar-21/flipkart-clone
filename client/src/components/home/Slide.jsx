import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Button, Divider, styled, Box } from "@mui/material";
import Countdown from 'react-countdown';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const MainBox = styled(Box)`
margin-top: 10px;
background: #ffffff;`

const Deal = styled(Box)`
margin: 15px 20px;
display: flex;
padding-top:10px;`

const DealImage = styled(Box)`
display: flex;
margin-left: 10px;
align-items: center;
color:#7F7F7F;
`
const DealText = styled(Typography)`
font-size: 22px;
font-weight: 600;
margin-right:25px;
line-height:32px;
`;

const ViewAll = styled(Button)`
margin-left: auto;
background-color: #2874f0;
border-radius: 2px;
font-size:13px;
font-weight: 600;
`;

const ImageProduct = styled('img')({
    width: 'auto',
    height: 150
});

const Text = styled(Typography)`
font-size: 14px;
margin-top: 5px;
`;

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds, completed }) => {
        return <Box varient="span">{hours}:{minutes}:{seconds} left</Box>
    };
    return (
        <MainBox>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer &&
                    <DealImage>
                        <img src={timerURL} alt='Timer' style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </DealImage>
                }
                <ViewAll variant="contained" color="primary">View All</ViewAll>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(product => (
                        <Box textAlign="center" style={{ padding: '25px 15px', textAligh: 'center' }}>
                            <ImageProduct key={product} src={product.url} alt="product" />
                            <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                            <Text style={{ color: 'green' }}>{product.discount}</Text>
                            <Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>
                        </Box>
                    ))
                }
            </Carousel>
        </MainBox>
    );
}

export default Slide;
