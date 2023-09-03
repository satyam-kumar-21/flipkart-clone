import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { getProducts as fetchProducts } from "../../redux/actions/productAction.js"; // Renamed imported function
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";

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
                <Slide products={products} />
                <Slide products={products} />
                <Slide products={products} />
                <Slide products={products} />
                <Slide products={products} />
            </BoxPadding>
        </>
    )
}

export default Home;
