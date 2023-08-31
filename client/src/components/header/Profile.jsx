import { Box, Typography, Menu, MenuItem , styled } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const MenuStyle = styled(Menu)`
margin-top: 10px;
margin-left: -81px;`

const LogoutText = styled(Typography)`
font-size: 14px;
margin-left: 20px;`

const Text = styled(Typography)`
margin-left:-81px;
`

const Profile = ({account, setAccount}) => {
    console.log(account);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const logoutUser = () => {
        setAccount('');
    }
    return (
        <>
            <Box onClick={handleClick}>
                <Text style={{ marginTop: 2 }}>{account}</Text>
            </Box>
            <MenuStyle
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {handleClose(); logoutUser();}}>
                    <PowerSettingsNewIcon color="primary" fontSize="small"/>
                    <LogoutText>Logout</LogoutText>
                </MenuItem>
                
            </MenuStyle>

        </>
    )
}

export default Profile;