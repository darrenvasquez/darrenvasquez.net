import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid, Typography, Paper, Card, CardContent, CardActions, Button} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		flxGrow: 1,
	},
	intro: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.secondary,
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}));

export default function App() {
	const classes = useStyles();
  	const theme = useTheme();

	return (
		<div style={{marginTop: '3%'}}>
			<Typography variant='h2' align='center'>Darren Vasquez</Typography>
			<Container maxwidth='md' className={classes.intro}>
				<Typography variant='h5' className={classes.paper}>
					<center>Hello! My name is Darren Vasquez.</center>
					<br/>
					I'm a senior at Arizona State University studying Computer Science. 
					I currently work part-time with Intel as a Software Developer in Chandler, Arizona and will begin working with Google in the fall as a Software Engineer in Seattle, Washington.
					<br/><br/>
					<center>Check out my website to learn more about the work I'm involved in!</center>
				</Typography>
			</Container>
			<Container maxWidth='md' className={classes.root}>
				EDUCATION
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Card className={classes.card}>
							<CardContent>
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									High School
								</Typography>
								<Typography variant="h5" component="h2">
									Verrado HS
								</Typography>
								<Typography className={classes.pos} color="textSecondary">
									Aug 2012 - May 2016
								</Typography>
								<Typography variant="body2" component="p">
									Learned Graphic Design and Engineering principles
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" onClick={() => window.open("https://www.aguafria.org/vhs")}>Visit School Page</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card className={classes.card}>
							<CardContent>
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									Higher Education
								</Typography>
								<Typography variant="h5" component="h2">
									Arizona State University
								</Typography>
								<Typography className={classes.pos} color="textSecondary">
									Aug 2016 - Present
								</Typography>
								<Typography variant="body2" component="p">
									Computer Science, B.S.
									<br/>
									3.25 GPA
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" onClick={() => window.open("https://asu.edu")}>Visit University Page</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card className={classes.card}>
							<CardContent>
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									Extracurricular
								</Typography>
								<Typography variant="h5" component="h2">
									Luminosity Academy
								</Typography>
								<Typography className={classes.pos} color="textSecondary">
									Aug 2019 - Dec 2019
								</Typography>
								<Typography variant="body2" component="p">
									Learned fundamentals of React and how to work with a team on a project
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" onClick={() => window.open("https://theluminositylab.com/academy/")}>Visit Academy Page</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}