import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {useNavigate} from "react-router-dom"

export default function MovieCard({ movieObj }) {
    const navigate = useNavigate();
    const handleclick = (title) =>{
        const url = `/movies/${encodeURIComponent(title)}`
        alert(`cilcked, ${movieObj.Title}`)
        navigate(url)
        
    }
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={()=>handleclick(movieObj.Title)}>
        <CardMedia
          style={{ objectFit: "cover" }}
          component="img"
          height="450"
          image={movieObj.Poster}
          alt={movieObj.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {movieObj.Title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {movieObj.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieObj.Runtime}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
