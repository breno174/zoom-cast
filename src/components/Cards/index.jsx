import { Box, Grid, Paper, styled } from "@mui/material";

function Cards() {
  const Container = styled("div")(() => ({
    flexGrow: 1,
    span: {
      color: "#195",
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.background.default,
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
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
