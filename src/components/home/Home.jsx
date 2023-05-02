
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import {  Box ,styled,Typography} from "@mui/material";
import HeartLikeButton from './Likebutton';
import { NavBar } from "../../constants/Data";
const Divi = styled(Box)`
display:flex;
margin-Left:32%;
margin-Top:5%
 ;
 
  
 

 
 `
 const Main = styled(Box)`
 
 `
 const Header = styled(Typography)`
 margin-Left:33%;
 margin-Top:10%
 width:20px;
height:20px;


 `
 const Date = styled(Typography)`
 color:red`
 const Heart = styled(HeartLikeButton)`
 color:red;
 magin-bottom-5px`
 const Share = styled(IosShareIcon)`
 color:grey;
 
 Margin-left:70%;
 margin-right:3%
 `

const Home =() =>{
     
    return(
        <Main>

            <Header><h1>Likes</h1></Header> 
            <Box> {
            NavBar.map(Data =>(
            <Divi>
                <img src={Data.url} alt="nav" style={{height:80,marginRight:15}} />

                
                <Typography  >  {Data.discrip} 
                     <Date> {Data.date} </Date>
                     <Typography> {Data.price}  </Typography>
                      <Share/>
                      <Heart/>
</Typography></Divi>))} </Box> </Main>


    )

}

export default Home;