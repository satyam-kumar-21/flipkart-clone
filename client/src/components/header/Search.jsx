import { InputBase, styled, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

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
    return (
        <>
            <SearchInputBox>
                <InputField placeholder="Search for products, brands and more" />
                <SearchIconImage>
                    <SearchIcon />
                </SearchIconImage>
            </SearchInputBox>
        </>
    )
}

export default Search;