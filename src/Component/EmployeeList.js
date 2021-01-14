import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import UserDetails from "./UserDetails";
import axios from "axios";
import "./Emplist.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 400,
    border: "4px solid grey",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

function EmployeeList(props) {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({});

  useEffect(() => {
    const timerID = setTimeout(() => {
      props.getEmployees();
      //console.log(props.employee);
    }, 1000);
    return () => clearInterval(timerID);
  });

  const handleClick = (url) => {
    axios
      .get(`${url}`)
      .then((res) => {
        setEmployeeDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error occured!!", err));

    setClick(true);
  };
  return (
    <div className="list-container">
      <div className="list">
        <List className={classes.root} subheader={<li />}>
          {props.employee.map((emp, index) => (
            <React.Fragment>
              <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={emp.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                  primary={emp.login}
                  onClick={() => handleClick(emp.url)}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {emp.node_id}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <CreateIcon />
                </IconButton>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={() => props.deleteEmployee(emp)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </div>
      <div className="details">
        {click ? <UserDetails employee={employeeDetails} /> : " "}
      </div>
    </div>
  );
}

export default EmployeeList;
