import { Fragment, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useHistory } from "react-router-dom";
import { API } from "./global";

export function Movie({
  id,
  name,
  url,
  des,
  rating,
  alt,
  key,
  Movieadd,
  setMovieadd,
}) {
  const [Like, setLike] = useState(null);
  const [DisLike, setDisLike] = useState(null);
  const btnstyle = {
    color: Like > 0 ? "red" : "gray",
  };
  const ratingStyle = {
    color: rating > 4.5 ? "green" : "red",
    marginLeft: "auto",
  };
  const dislikeStyle = {
    color: DisLike ? "blue" : "gray",
  };
  const [desDisplay, setdesDisplay] = useState(false);
  const history = useHistory();
  const getMovies = () => {
    fetch(`${API}/movies`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovieadd(mv));
  };
  return (
    <Fragment>
      <Card sx={{ maxWidth: 400, maxHeight:850, justifyContent: "center" }}>
        <CardMedia sx={{minHeight:550}} component="img" height="auto" image={url} alt={alt} />
        <CardContent>
          <CardActions>
            <Typography gutterBottom variant="h5" component="div">
              {name}
              <IconButton
                aria-label="des"
                color="primary"
                onClick={() => {
                  setdesDisplay(!desDisplay);
                }}
              >
                {desDisplay ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </IconButton>
              <IconButton
                aria-label="des"
                color="primary"
                onClick={() => {
                  history.push(`/movieslist/details/${key}`);
                }}
              >
                <InfoIcon />
              </IconButton>
            </Typography>
            <IconButton aria-label="rating" style={ratingStyle}>
              <StarIcon />
              
            </IconButton>
            {rating}
          </CardActions>
          {desDisplay ? (
            <Typography variant="body" color="text.secondary">
              {des}
            </Typography>
          ) : (
            ""
          )}
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="like"
            variant="contained"
            color="primary"
            onClick={() => setLike(Like + 1)}
          >
            <Badge badgeContent={Like} color="primary">
              <span style={btnstyle}>
                <FavoriteIcon />
              </span>
            </Badge>
          </IconButton>
          <IconButton
            aria-label="dislike"
            variant="contained"
            color="error"
            onClick={() => setDisLike(DisLike + 1)}
          >
            <Badge badgeContent={DisLike} color="error">
              <span style={dislikeStyle}>
                <ThumbDownAltIcon />
              </span>
            </Badge>
          </IconButton>
          <IconButton
            aria-label="delete"
            color="error"
            style={{ marginLeft: "auto" }}
            onClick={() => {
              fetch(`${API}/movies/${id}`, { method: "DELETE" }).then(() =>
                getMovies()
              );
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="edit"
            color="primary"
            variant="contained"
            onClick={() => history.push(`/movieslist/edit/${key}`)}
          >
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Fragment>
  );
}
