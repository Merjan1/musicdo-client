import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import { getPosts } from "../../actions/posts";
import Form from "../../components/Form/Form";
import Posts from "../../components/Posts/Posts";
import useStyles from "./Home.styles";
import { useDispatch } from "react-redux";

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.formBox}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} /> &nbsp;
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
