import { navData } from "../../constrants/data";
import { Box, styled , Typography} from "@mui/material";

const Component = styled(Box) `
display:flex;
margin:55px 130px 0 130px;
justify-content: space-between;
`

const NavContainer = styled(Box)`
padding: 12px 8px;
text-align:center;
`
const NavTex = styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family: inherit;`

const Navbar = () => {
    return (
        <Component>
            {     
                navData.map(data => (
                    <NavContainer key={data.id}>
                        <img src={data.url} alt="Nav" style={{width: 64}}/>
                        <NavTex>{data.text}</NavTex>
                    </NavContainer>
                ))
            }
        </Component>
    );
}

export default Navbar;