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
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
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
  const [open, setOpen] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [node_id, setNode_id] = useState("");
  const [url, setUrl] = useState("");
  const [login, setLogin] = useState("");
  const [editopen, setEditopen] = useState(false);
  const [id, setId] = useState("");
  const [editlogin, setEditlogin] = useState("");
  const [editnode_id, setEditnode_id] = useState("");
  //const [addEmp, setAddEmp] = useState({});
  var isload = 0;
  useEffect(() => {
    if (isload === 0) {
      const timerID = setTimeout(() => {
        props.getEmployees();
        //console.log(props.employee);
      }, 1000);
      return () => clearInterval(timerID);
    }
    isload++;
    console.log(isload);
  }, []);
  const handleClose = () => {
    setOpen(false);
    setEditopen(false);
  };
  const handleOpenClick = () => {
    setOpen(true);
  };
  const handleSave = () => {
    let newEmp = {
      name,
      location,
      node_id,
      url,
      login,
    };
    //setAddEmp(newEmp);
    console.log(newEmp);
    props.addEmployee(newEmp);
    handleClose();
  };
  const handleEdit = (id) => {
    setEditopen(true);
    console.log(id);
    setId(id);
  };
  const handleEditSave = () => {
    let editObj = {
      id,
      login: editlogin,
      node_id: editnode_id,
    };
    console.log(editObj);
    props.editEmployee(editObj);
    handleClose();
  };
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
        <Fab color="primary" aria-label="add" onClick={handleOpenClick}>
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Add a new Employee , please enter name, Img url, location,login
              here. It will Save
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="ImageURL"
              type="url"
              onChange={(event) => setUrl(event.target.value)}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="login"
              label="login"
              type="login"
              onChange={(event) => setLogin(event.target.value)}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              type="name"
              onChange={(event) => setName(event.target.value)}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="location"
              label="location"
              type="location"
              fullWidth
              onChange={(event) => setLocation(event.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="node_id"
              type="node_id"
              onChange={(event) => setNode_id(event.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={editopen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Update any details , please enter url, login here. It will Save
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="login"
              label="login"
              type="login"
              onChange={(event) => setEditlogin(event.target.value)}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="node_id"
              type="node_id"
              onChange={(event) => setEditnode_id(event.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => handleEditSave()} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
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
                  onClick={() => handleEdit(emp.id)}
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
