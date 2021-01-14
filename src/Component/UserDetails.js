import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    border: "2px solid darkgrey",
  },
  media: {
    height: 0,
    paddingTop: "70%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UserDetails(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.employee.gravatar_id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.employee.login}
        subheader={props.employee.created_at}
      />
      <CardMedia
        className={classes.media}
        image={props.employee.avatar_url}
        title="EmployeeImg"
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="h3">
          Employee Name: {props.employee.name}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h3">
          Company Name: {props.employee.company}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h3">
          Employee Location: {props.employee.location}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h3">
          Twitter : {props.employee.twitter_username}
        </Typography>
      </CardContent>
    </Card>
  );
}
