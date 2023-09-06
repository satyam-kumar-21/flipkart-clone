import { InputBase, styled, Box , List, ListItem} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from "../../redux/actions/productAction";

const SearchInputBox = styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const InputField = styled(InputBase)`
padding-left: 20px;
width:100%; 
font-size: unset;
`

const SearchIconImage = styled(Box)`
color:blue;
padding: 5px;
`

const Search = () => {

    const [text, setText] = useState('');

    const {products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())

    },[dispatch])

    const getText = (text) => {
        setText(text);
    }
    return (
        <>
            <SearchInputBox>
                <InputField placeholder="Search for products, brands and more"
                onChange={(e) => getText(e.target.value)}
                />
                <SearchIconImage>
                    <SearchIcon />
                </SearchIconImage>
                {
                    text && 
                    <List>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>{
                            <ListItem>
                            {product.title.longTitle}
                            </ListItem>
                        })
                    }
                    </List>
                }
            </SearchInputBox>
        </>
    )
}

export default Search;