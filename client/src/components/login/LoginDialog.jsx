
import { Dialog, Box, Typography, Button, TextField, styled } from "@mui/material";
import { useState, useContext } from "react";
import { authenticatesSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const MainComponents = styled(Box)`
height: 78vh;
width: 55vw;
display:flex;`

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
height: 81.7%;
width:28%;
padding: 45px 35px;
& > p,& > h5 {
    color: #FFFFFF;
    font-weight: 500;
}`

const RightPart = styled(Box)`
display: flex;
flex-direction: column;
padding:25px 35px;
flex:1;
& > div, & > button, & > p {
    margin-top: 14px;
}`

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height:48px;
border-radius:2px;
`
const RequestOTP = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text = styled(Typography)`
font-size:12px;
color:#878787;`

const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;`

const accountIntitialValues = {
    login:{
        view: 'login',
        heading: 'Login' ,
        subHeading: 'Get access to your orders, wishlist and Recomendations'
    },
    signup :{
        view: 'signup',
        heading: `looks like you're new here` ,
        subHeading: 'signup with mobile number to get started'
    }
}

const signupIntitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountIntitialValues.login);
    const {setAccount} = useContext(DataContext);

    const toggleSignup = () => {
        toggleAccount(accountIntitialValues.signup)
    };

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountIntitialValues.login)
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
        console.log(signup);
    }

    const [signup, setSignup] = useState(signupIntitialValues);

    const signupUser = async () => {
        const response = await authenticatesSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: `unset` } }}>
                <MainComponents>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <RightPart>
                                <TextField variant="standard" label="Enter Email/Mobile Number"></TextField>
                                <TextField variant="standard" label="Enter Password"></TextField>
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()}>New to flipkart? Create an account</CreateAccount>
                            </RightPart>
                            :
                            <RightPart>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname"></TextField>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname"></TextField>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username"></TextField>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email"></TextField>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password"></TextField>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone"></TextField>
                            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        </RightPart>
                    }
                </MainComponents>
            </Dialog>
        </>
    )
}

export default LoginDialog;