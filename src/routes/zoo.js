// import './App.css';
import React from 'react'
import Navbar from "../navbar"
import { Grid, Box, Typography, AppBar, Toolbar, Paper, Button, Stack } from '@mui/material'
import {withStyles} from '@mui/styles'
import water from '../water.png'
import a1 from "./a1.png"
import a2 from './a2.png'
import a3 from './a3.png'
import a4 from './a4.png'
import a5 from './a5.png'
import a6 from './a6.png'
import b1 from './b1.png'
import b2 from './b2.png'
import b3 from './b3.png'
import b4 from './b4.png'
import b5 from './b5.png'
import b6 from './b6.png'

import a11 from '../animals/Asset 11.png'
import a12 from '../animals/Asset 12.png'
import a13 from '../animals/Asset 13.png'
import a14 from '../animals/Asset 14.png'
import a15 from '../animals/Asset 15.png'
import a16 from '../animals/Asset 16.png'
import a17 from '../animals/Asset 17.png'
import a18 from '../animals/Asset 18.png'
import a19 from '../animals/Asset 19.png'
import a20 from '../animals/Asset 20.png'
import a21 from '../animals/Asset 21.png'
import a23 from '../animals/Asset 23.png'
import a24 from '../animals/Asset 24.png'
import a25 from '../animals/Asset 25.png'
import a26 from '../animals/Asset 26.png'
import a27 from '../animals/Asset 27.png'
import a28 from '../animals/Asset 28.png'
import a29 from '../animals/Asset 29.png'
import a30 from '../animals/Asset 30.png'
import a31 from '../animals/Asset 31.png'
import a32 from '../animals/Asset 32.png'
import a33 from '../animals/Asset 33.png'
import a34 from '../animals/Asset 34.png'

var bottle=50;

const animalPictures = {a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34}

const animalLinks = {a1,a2,a3,a4,a5,a6,b1,b2,b3,b4,b5,b6}

const styles = {
    dailyIntake: {
        fontSize: "3rem",
        fontWeight: 900
    },
    background: {
        backgroundColor: "rgb(235,235,231)",
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
    },
    intake: {
        paddingLeft: "30px",
        display: 'flex',
        lineHeight: 3,
        position: 'relative',
    },
    animalback: {
        main: '#D9D9D9',
    },
    animalimg:{
        paddingBottom: "15px",
        maxHeight: "100%",
        maxWidth: "100%",

    }
}



class Zoo extends React.Component {
    render() {
        const { classes } = this.props;
        var drinkData = this.props.drinkData;
        var volume = (drinkData[0]['volume'])
        // console.log(this.props.animals[0]['color'])
        // for (var i=0; i < userAnimals.length; i++)
        //     animalLinks[i] = animalPictures[parseInt(this.props.animals[i]['color'] * parseInt(this.props.animals[i]['type']))]
        //     // console.log(userAnimals.length)
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
            
            <div>
        {/* <img src={water} alt="" style={{maxHeight: "100%", maxWidth: "100%"}}/> */}
        <br />
        <br />
       
      </div>


                    <Grid container spacing={0} className={classes.root}>
                        <Grid item xs={3} className={classes.intake}>
                            <Paper>
                                <Typography sx = {{fontSize: "3rem", fontWeight: 700}} className={classes.dailyIntake}>
                                    YOUR DAILY
                                </Typography>
                                {/* <Typography sx = {{fontSize: "3rem", fontWeight: 700}} className={classes.dailyIntake}>
                                    DAILY
                                </Typography> */}
                                <Typography sx = {{fontSize: "3rem", fontWeight: 700, marginTop: "-15px"}} className={classes.dailyIntake}>
                                    INTAKE:
                                </Typography>
                                <Typography sx = {{fontSize: "5rem", fontWeight: 700, color: "#E065C6", marginTop: "-25px" }} className={classes.dailyIntake}>
                                    {volume} L
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs = {3}>
                            <Box style={{height: "15rem"}}>
                                <img src={water} style={{maxHeight: "100%", maxWidth: "100%"}}/>
                            </Box>
                        </Grid>
                    
                        <Grid item xs = {2}>
                            <Paper>
                            <Typography sx = {{fontSize: "2.2rem", fontWeight: 700, marginTop: "20px", paddingLeft:"0px" }} className={classes.dailyIntake}>
                                    BOTTLES YOU'VE SAVED TODAY:
                                </Typography>
                            </Paper>
                         </Grid>
                         <Grid item xs = {2}>
                            <Typography sx = {{fontSize: "7rem", fontWeight: 700, color: "#E065C6", marginLeft: "-60px", marginTop: "40px"}} className={classes.dailyIntake} >
                                    {Math.round(volume/0.708*100)/100}
                                </Typography>
                         </Grid>
                         <Grid item xs = {2}>
                            <Paper>
                            <Typography sx = {{fontSize: "3rem", fontWeight: 700, marginTop: "15px",  paddingRight: "20px" }} className={classes.dailyIntake}>
                                   STREAK:
                                </Typography>
                            </Paper>
                            <Typography sx = {{fontSize: "3rem", fontWeight: 700, color: "#E065C6", paddingRight: "20px"}} className={classes.dailyIntake} >
                                    5
                            </Typography>
                            <Typography sx = {{fontSize: "2rem", fontWeight: 700, color: "#000000",  paddingRight: "20px"}} className={classes.dailyIntake} >
                                    days
                            </Typography>
                         
                         </Grid>
                         
                    </Grid>

            <Grid container spacing={0} className={classes.root}>
                    <Grid item xs = {12}>
                        <Paper>
                    <Typography sx = {{fontSize: "7rem", fontWeight: 700, marginTop: "15px", marginBottom: "15px"}} className={classes.dailyIntake} >
                            YOUR ANIMALS
                        </Typography>
                        </Paper>
                    </Grid>


                   <Grid container spacing={0} style={{backgroundColor: "#CDC3BC", paddingTop: "40px"}}>
                        <Grid item xs = {2}> <img src={a1} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={a2} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={a3} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={a4} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={a5} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={a6} className={classes.animalimg}/> </Grid>
                        
                        <Grid item xs = {2}> <img src={b1} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={b2} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={b3} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={b4} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={b5} className={classes.animalimg}/> </Grid>
                        <Grid item xs = {2}> <img src={b6} className={classes.animalimg}/> </Grid>
                 </Grid>
            </Grid>


            {/* <Grid container spacing={0} className={classes.root}> */}
            {/* <div className={classes.background}> */}
                {/* <Grid item direction="row" alignItems="center" xs={8}>
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
                </Grid> */}
                {/* </div> */}
                {/* <Grid container direction = "row" xs={4}> */}
                    {/* <Grid item xs={12}> */}
                        {/* <Paper>
                            <Typography sx = {{fontSize: "1.5rem", fontWeight: 700, textAlign: "left", display: "inline-block"}}>
                                Number of bottles you've saved today: 
                                <span style={{color: "#E065C6"}}> {bottle} </span>
                            </Typography>
                        </Paper> */}
                        {/* <Box alignItems="center" sx={{textAlign: "center", display: "flex", justifyContent: 'center'}}>
                            <Paper component={Stack} direction="column" justifyContent="center" sx={{ height: "12rem", width: "12rem", borderRadius: '50%', backgroundColor: "#E0EEF4" }}>
                                <Typography sx={{fontSize: "4rem", fontWeight: 900, color: "#E065C6"}}>
                                    2
                                </Typography>
                                <Typography sx={{fontSize: "0.5rem", fontWeight: 900, color: "#000000"}}>
                                    DAY STREAK
                                </Typography>
                            </Paper>
                        </Box> */}
                    {/* </Grid>
                    <Grid item xs={6}> */}
                        {/* <Paper>
                            <Typography sx = {{textAlign: "center", fontSize: "2.5rem", fontWeight: 900}} className={classes.dailyIntake}>
                                YOU REACHED YOUR DAILY WATER INTAKE GOAL <span style={{color: "#E065C6"}}> TWO </span> DAYS IN A ROW!! 
                            </Typography>
                        </Paper> */}
                    {/* </Grid> */}
                {/* </Grid> */}
            {/* </Grid> */}
        </Box>
        )
    }
}

export default withStyles(styles)(Zoo);