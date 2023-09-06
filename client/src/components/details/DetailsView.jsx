import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box,  Grid, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const MainComp = styled(Box)`
background: #F2F2F2;
margin-top: 55px;
`;

const Container = styled(Grid)(({theme}) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]:{
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
margin-top: 50px;
// width: 55%;
padding-left: 40px;
`;

const DetailsView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, loading, product])

    console.log("product is :", product);
    

    return (
        <>
            <MainComp>
                {
                    product && Object.keys(product).length &&
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product} />
                        </Grid>
                        <RightContainer item lg={8} md={8} sm={8} xs={12}>

                            <ProductDetail product={product}/>
                        </RightContainer>
                    </Container>
                }
            </MainComp>
        </>
    )
};

export default DetailsView;