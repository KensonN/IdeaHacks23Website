// import './App.css';
import React from 'react'
import Navbar from "../navbar"
import { Grid, Box, Typography, AppBar, Toolbar, Paper, Button, Stack } from '@mui/material'
import {withStyles} from '@mui/styles'
import water from '../water.png'

var bottle=50

const styles = {
    dailyIntake: {
        fontSize: "3rem",
        fontWeight: 900
    },
	root: {
	  minHeight: "98vh",
      maxHeight: "100vh",
	//   backgroundColor: "rgb(51, 48, 48)",
	},
    body: {
        overflow: "hidden"
    },
    toolbar: {
        maxHeight: "2vh"
    },
}

class Zoo extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Box className="Home" sx={{ flexGrow: 1 }}>
			<AppBar position="relative">
				<Toolbar className={classes.toolbar}>
                    {/* <div /> */}
					{/* <Typography component="h1" variant="h6"  sx={{ mr: 2 }} edge="start">
						Project Name
					</Typography>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						
					</Typography> */}
                    <Button color="inherit" sx={{ marginLeft: "auto" }}>Community</Button>
					<Button color="inherit">Home</Button>
					<Button color="inherit" variant="outlined">Logout</Button>
				</Toolbar>
			</AppBar>
            <Grid container spacing={0} className={classes.root}>
                <Grid item direction="row" alignItems="center" xs={6}>
                    <Grid container direction="row">
                        <Grid item xs={6}>
                            <Paper>
                                <Typography sx = {{fontSize: "2.5rem", fontWeight: 700}} className={classes.dailyIntake}>
                                    YOUR 
                                </Typography>
                                <Typography sx = {{fontSize: "2.5rem", fontWeight: 700}} className={classes.dailyIntake}>
                                    DAILY
                                </Typography>
                                <Typography sx = {{fontSize: "2.5rem", fontWeight: 700}} className={classes.dailyIntake}>
                                    INTAKE
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper style={{height:"50%"}}>
                                <img src={water} style={{maxHeight: "100%", maxWidth: "100%"}}/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={8}>
                        <Grid item>
                            <Typography>
                                Sun
                            </Typography>
                            <Typography>
                                1
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Mon
                            </Typography>
                            <Typography>
                                1
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Tues
                            </Typography>
                            <Typography>
                                1
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Wed
                            </Typography>
                            <Typography>
                                1
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Thurs
                            </Typography>
                            <Typography>
                                1
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Fri
                            </Typography>
                            <Typography>
                                1
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Sat
                            </Typography>
                            <Typography>
                                1
                            </Typography>
                        </Grid>
                    </Grid> 
                    <Grid item xs={12}>
                        <Typography>
                            YOUR ANIMALS
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box bgcolor="primary.main" sx={{ borderRadius: '16px' }} style={{width: "100%"}}>
                            <Typography>
                                grid
                            </Typography>
                        </Box>
                    </Grid>                           
                </Grid>
                <Grid container direction = "row" xs={6}>
                    <Grid item xs={6}>
                        <Paper>
                            <Typography sx = {{fontSize: "1.5rem", fontWeight: 700, textAlign: "left", display: "inline-block"}}>
                                Number of bottles you've saved today: 
                                <span style={{color: "#E065C6"}}> {bottle} </span>
                            </Typography>
                        </Paper>
                        <Paper component={Stack} direction="column" justifyContent="center" sx={{ height: "12rem", width: "12rem", borderRadius: '50%', backgroundColor: "#E0EEF4" }}>
                            <Typography sx={{fontSize: "4rem", fontWeight: 900, color: "#E065C6"}}>
                                2
                            </Typography>
                            <Typography sx={{fontSize: "0.5rem", fontWeight: 900, color: "#000000"}}>
                                DAY STREAK
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <Typography sx = {{textAlign: "right", fontSize: "2.5rem", fontWeight: 900}} className={classes.dailyIntake}>
                                YOU REACHED YOUR DAILY WATER INTAKE GOAL <span style={{color: "#E065C6"}}> TWO </span> DAYS IN A ROW!! 
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                    <Paper>
                        <Typography>
                            Test
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
        )
    }
}

export default withStyles(styles)(Zoo);