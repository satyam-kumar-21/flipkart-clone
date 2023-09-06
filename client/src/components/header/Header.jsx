import { AppBar, Toolbar, Typography, Box, IconButton, Drawer,List, ListItem, styled } from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import {Menu} from '@mui/icons-material';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
background : #2874fo;
height: 55px;
line-height:0;
`
const Logo = styled(Link)`
margin-left : 12%;
line-height: 0;
text-decoration : none;
color: inherit;
`
const Explore = styled(Typography)`
font-size:10px;
font-style:italic;
`

const ExploreImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWapper = styled(Box)(({theme}) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({theme})=>({
display: 'none',
[theme.breakpoints.down('md')]:{
    display: 'block',
    color: 'white'
}
}));



const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open , setOpen] = useState(false);

    const handleOpen =() => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style={{width: 200}} onClick={handleClose}>
            <List>
                <ListItem>
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
    )

    return (
        <>
            <StyledHeader >
                <Toolbar style={{ minHeight: 55 }}>
                    <MenuButton onClick={handleOpen}>
                        <Menu />
                    </MenuButton>

                    <Drawer open={open} onClose={handleClose}> 
                    {list()}
                    </Drawer> 

                    <Logo to={'/'}>
                        <img src={logoURL} alt="logo" style={{ width: 75 }} />
                        <Box style={{ display: 'flex' }}>
                            <Explore>Explore&nbsp;
                                <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                            </Explore>
                            <ExploreImage src={subURL} alt="sub-logo" />
                        </Box>
                    </Logo>
                    <Search />
                    <CustomButtonWapper>
                        <CustomButton />
                    </CustomButtonWapper>
                </Toolbar>

            </StyledHeader>
        </>
    )
}

export default Header;