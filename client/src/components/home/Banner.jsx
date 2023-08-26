import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
import { bannerData } from "../../constrants/data";
import {styled} from "@mui/material";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const BannerImage = styled('img')({
    width: '100%',
    height: 280
})

const Banner = () => {
    return (
        <Carousel responsive={responsive}  dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" containerClass="carousel-container"   swipeable={false}
        draggable={false} infinite={true} autoPlay={true} autoPlaySpeed={4000}
        keyBoardControl={true} slideToslide={1}>
            {bannerData.map(data => (
                <BannerImage key={data.id} src={data.url} alt="banner data" />
            ))}
        </Carousel>
    );
};

export default Banner;
