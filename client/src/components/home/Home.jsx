import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { getProducts as fetchProducts } from "../../redux/actions/productAction.js"; // Renamed imported function
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const BoxPadding = styled(Box)`
  padding: 10px;
  background: #F2F2F2;
`

const Home = () => {
    const {products} = useSelector(state => state.getProducts); // Renamed selector variable
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts()); // Using the renamed imported function
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <BoxPadding>
                <Banner />
                <MidSlide products={products}  title="Deal of the Day1" timer={true}/>
                <MidSection />
                <Slide products={products} title="Deal of the Day2" timer={false}/>
                <Slide products={products} title="Deal of the Day3" timer={false}/>
                <Slide products={products} title="Deal of the Day4" timer={false}/>
                <Slide products={products} title="Deal of the Day5" timer={false}/>
            </BoxPadding>
        </>
    )
}

export default Home;
