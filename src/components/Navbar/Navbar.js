import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import useStyles from "./Navbar.styles";
import logo from "../../images/music_logo.jpg";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h4"
          align="center"
        >
          MusicDo
        </Typography>
        <img
          className={classes.image}
          src={logo}
          alt="music logo"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            {console.log(user)}
            <Avatar
              className={classes.purple}
              alt={user.result ? user.result.name : user.name}
              src={user.result ? user.result.imageUrl : user.imageUrl}
            >
              {user.result
                ? user.result.name.charAt(0)
                : user.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result ? user.result.name : user.name}
            </Typography>
            <Button
              variant="outlined"
              className={classes.logout}
              color="primary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
