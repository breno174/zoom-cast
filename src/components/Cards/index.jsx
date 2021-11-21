import { Box, Grid, Paper, styled } from "@mui/material";

function Cards() {
  const Container = styled("div")(() => ({
    flexGrow: 1,
    span: {
      color: "#000",
      "&:hover": {
        color: "#555",
        textDecoration: "line-through",
      },
    },
  }));

  const Item = styled(Paper)(({ theme, language }) => ({
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor:
      language === "JS"
        ? "#EE1"
        : language === "Python"
        ? "#195"
        : theme.palette.background.default,
  }));
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <span>xs=4</span>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <span>xs=8</span>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cards;

/**
 * <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
    </Grid>
  </Box>


  <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
      </Grid>
    </Box>

 */
