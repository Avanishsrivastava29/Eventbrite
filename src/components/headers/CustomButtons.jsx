
import {Box,Button, Typography,styled} from "@mui/material"; //Importing tags from mui/material
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//styling
const Wrapper = styled(Box)`
display:flex;`
const Events =styled(Typography)`
color:grey;
display:flex
font-size:15px;
 `
 const  Arrow = styled(KeyboardArrowDownIcon)`
 color:grey;`
 const ImageIcon  = styled(AccountCircleIcon)`
 color:grey;`
 
//components

const CustomButtons=()=>{
    return(
        <Wrapper>
            <Events style={{margin:5, marginTop:12}}>  Browse events</Events>
            <Events style={{ margin:5,marginTop:12}}>  Host an event<Arrow/> </Events>
                
            <Events style={{ margin:5,marginTop:12}}>  Help <Arrow/></Events>
            <Box>
                <Events style={{ Margin:5,marginTop:12}}><ImageIcon/>avanishsrivastava78@gmail.com <Arrow/></Events>
            </Box>
        </Wrapper>
    ) 

}
export default CustomButtons;
