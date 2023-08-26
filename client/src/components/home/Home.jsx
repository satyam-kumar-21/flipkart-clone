import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

const BoxPadding = styled(Box)`
padding: 10px;
background: #F2F2F2;
`

const Home = () => {
    return (
        <>
            <Navbar />
            <BoxPadding>
                <Banner />
            </BoxPadding>
        </>
    )
}

export default Home;