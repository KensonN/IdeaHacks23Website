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
	//   minHeight: "98vh",
      maxHeight: "100vh",
	//   backgroundColor: "rgb(51, 48, 48)",
	},
    body: {
        overflow: "hidden"
    },
    toolbar: {
        maxHeight: "2vh"
    },
    animals: {
        height: "10rem",
        width: "10rem"
    },
    animalPics: {
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "fill"
    }

}

class Zoo extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Box className="Home" sx={{ flexGrow: 1 }}>
			<AppBar position="relative">
				<Toolbar className={classes.toolbar}>
                    {/* <div /> */}
					<Typography component="h1" variant="h6"  sx={{ mr: 2, fontWeight: 700 }} edge="start">
						HYDRANIMALS
					</Typography>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						
					</Typography>
                    <Button color="inherit" sx={{ marginLeft: "auto" }}></Button>
					{/* <Button color="inherit">Home</Button> */}
					<Button color="inherit" variant="outlined">Logout</Button>
				</Toolbar>
			</AppBar>
            <Grid container spacing={0} className={classes.root}>
                <Grid item direction="row" alignItems="center" xs={8}>
                    <Grid container direction="row">
                        <Grid item xs={4}>
                            <Paper>
                                <Typography sx = {{fontSize: "2.5rem", fontWeight: 700}} className={classes.dailyIntake}>
                                    YOUR 
                                </Typography>
                                <Typography sx = {{fontSize: "2.5rem", fontWeight: 700}} className={classes.dailyIntake}>
                                    DAILY
                                </Typography>
                                <Typography sx = {{fontSize: "2.5rem", fontWeight: 700}} className={classes.dailyIntake}>
                                    INTAKE:
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack direction="row" justifyContent="center">
                                <Grid item direction="row" alignItems="center" xs={8}> </Grid>
                                <Typography sx = {{fontSize: "5rem", fontWeight: 700, color: "#E065C6"}}>
                                    2.5L 
                                </Typography>
                                <Grid item direction="row" alignItems="center" xs={8}> </Grid>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Box style={{height: "15rem"}}>
                                <img src={water} style={{maxHeight: "100%", maxWidth: "100%"}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                    {/* <Grid container direction="row" justifyContent="center" alignItems="center" spacing={8}>
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
                    </Grid>  */}
                    <Grid item xs={12}>
                        <Typography>
                            YOUR ANIMALS
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row">
                            <Grid item className={classes.animals}>
                                <img src="https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg" className={classes.animalPics}/>
                                <Typography>
                                    pos1
                                </Typography>
                            </Grid>
                            <Grid item className={classes.animals}>
                                <Typography>
                                    pos2
                                </Typography>
                            </Grid>
                            <Grid item className={classes.animals}>
                                <Typography>
                                    pos3
                                </Typography>
                            </Grid>
                            <Grid item className={classes.animals}>
                                <Typography>
                                    pos4
                                </Typography>
                            </Grid>
                            <Grid item className={classes.animals}>
                                <Typography>
                                    pos5
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                        <Grid item className={classes.animals}>
                                <img src="https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/0x0.jpg?format=jpg&width=1200" className={classes.animalPics}/>
                                <Typography>
                                    pos6
                                </Typography>
                            </Grid>
                            <Grid item className={classes.animals}>
                                <Typography>
                                    pos7
                                </Typography>
                            </Grid>
                            <Grid item className={classes.animals}>
                                <Typography>
                                    pos8
                                </Typography>
                            </Grid>
                            <Grid item className={classes.animals}>
                                <Typography>
                                    pos9
                                </Typography>
                            </Grid>
                            <Grid item className={classes.animals}>
                                <Typography>
                                    pos10
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>                           
                </Grid>
                <Grid container direction = "row" xs={4}>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography sx = {{fontSize: "1.5rem", fontWeight: 700, textAlign: "left", display: "inline-block"}}>
                                Number of bottles you've saved today: 
                                <span style={{color: "#E065C6"}}> {bottle} </span>
                            </Typography>
                        </Paper>
                        <Box alignItems="center" sx={{textAlign: "center", display: "flex", justifyContent: 'center'}}>
                            <Paper component={Stack} direction="column" justifyContent="center" sx={{ height: "12rem", width: "12rem", borderRadius: '50%', backgroundColor: "#E0EEF4" }}>
                                <Typography sx={{fontSize: "4rem", fontWeight: 900, color: "#E065C6"}}>
                                    2
                                </Typography>
                                <Typography sx={{fontSize: "0.5rem", fontWeight: 900, color: "#000000"}}>
                                    DAY STREAK
                                </Typography>
                            </Paper>
                        </Box>
                    {/* </Grid>
                    <Grid item xs={6}> */}
                        <Paper>
                            <Typography sx = {{textAlign: "center", fontSize: "2.5rem", fontWeight: 900}} className={classes.dailyIntake}>
                                YOU REACHED YOUR DAILY WATER INTAKE GOAL <span style={{color: "#E065C6"}}> TWO </span> DAYS IN A ROW!! 
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        )
    }
}

export default withStyles(styles)(Zoo);