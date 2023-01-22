import '../App.css';
import React from 'react'
import { Link } from "react-router-dom"
import { Button, AppBar, Box, Typography, Toolbar} from '@mui/material'
import {withStyles} from '@mui/styles'

const styles = theme => ({
	// root: {
	//   minHeight: "100vh",
	//   backgroundColor: "rgb(51, 48, 48)",
	// },
	// drawer: {
	//   width: "10rem",
	//   position: 'relative',
	// },
	// menuIcon: {
	//   marginRight: 32
	// },
	// title: {
	//   flexGrow: 1,
	// },
})

class Home extends React.PureComponent {
	render() {
	const {classes} = this.props;
	return (
		<Box className="Home" sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography component="h1" variant="h6"  sx={{ mr: 2 }} edge="start">
						Project Name
					</Typography>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Typography component="h1" variant="h3">
				Welcome to the blah blah blah. fkdsja;fllkfjdslkafjdsj fjdslafj dls klfd ljsflkajd flkdj kf dj fdjkls jkf kdl jflkdj f jljkf 
			</Typography>
			<Link to="/login">
				<Button>
					Login
				</Button>
			</Link>
		</Box>
	)
  }
}

export default withStyles(styles)(Home);
