import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import {getPosts} from '../actions/posts'
import Form from "../components/Form/Form";
import Posts from "../components/Posts/Posts";
import logo from "../images/music-logo.jpg";
import useStyles from "../components/Home.styles";
import {useDispatch } from 'react-redux';

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());

  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          MusicDo
        </Typography>
        <img
          className={classes.image}
          src={logo}
          alt="music logo"
          height="60"
          // width="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="strech">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

    // <div className="text-center">
    //   <img
    //     src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/84/original/logo-ironhack-blue.png"
    //     alt="ironhack logo"
    //   />
    //   <h1>React IronPlate</h1>
    //   <p>This is the homepage</p>
    //   <div className="d-flex flex-column align-items-center">
    //     <Link className="btn btn-lg btn-primary" to="/auth/signup">
    //       Signup here!
    //     </Link>
    //   </div>
    // </div>
  );
}

export default Home;
