import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid, Typography, Paper, Card, CardContent, CardActions, Button, CardHeader, Avatar } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
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
	header: {
		paddingBottom: theme.spacing(3),
		paddingLeft: 0,
		paddingTop: 0,
	},
	cardAction: {
		paddingTop: 0,
	}
}));

export default function App() {
	const classes = useStyles();
  	const theme = useTheme();

	return (
		<div style={{marginTop: '3%'}}>
			<Typography variant='h2' align='center'>Darren Vasquez</Typography>
			<Container maxwidth='md' className={classes.intro}>
				<Typography variant='h5' className={classes.paper}>
					<center>intro</center>
				</Typography>
			</Container>
			<Container maxWidth='md' className={classes.root}>
				<Typography variant="h5" className={classes.paper}>Education</Typography>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Card className={classes.card}>
							<CardContent>
								<CardHeader className={classes.header}
									avatar={<Avatar aria-label="avatar" className={classes.avatar}>1</Avatar>}
									title="Verrado High School"
									subheader="Aug 2012 - May 2016"
								/>
								<Typography variant="body2" component="p">
									Learned Graphic Design and Engineering principles
								</Typography>
							</CardContent>
							<CardActions className={classes.cardAction}>
								<Button size="small" onClick={() => window.open("https://www.aguafria.org/vhs")}>Visit School Page</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card className={classes.card}>
							<CardContent>
								<CardHeader className={classes.header}
									avatar={<Avatar aria-label="avatar" className={classes.avatar}>2</Avatar>}
									title="Arizona State University"
									subheader="Aug 2016 - May 2020"
								/>
								<Typography variant="body2" component="p">
									Computer Science, B.S.
								</Typography>
								<Typography variant="body2" component="p">
									3.25 GPA
								</Typography>
							</CardContent>
							<CardActions className={classes.cardAction}>
								<Button size="small" onClick={() => window.open("https://asu.edu")}>Visit School Page</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card className={classes.card}>
							<CardContent>
								<CardHeader className={classes.header}
									avatar={<Avatar aria-label="avatar" className={classes.avatar}>3</Avatar>}
									title="Luminosity Academy"
									subheader="Aug 2019 - Dec 2019"
								/>
								<Typography variant="body2" component="p">
									Learned fundamentals of React and how to work with a team on a project
								</Typography>
							</CardContent>
							<CardActions className={classes.cardAction}>
								<Button size="small" onClick={() => window.open("https://theluminositylab.com/academy/")}>Visit School Page</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
			<br/>
			<Container maxWidth='md' className={classes.root}>
				<Typography variant="h5" className={classes.paper}>Experience</Typography>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Card className={classes.card}>
							<CardContent>
								<CardHeader className={classes.header}
									avatar={<Avatar aria-label="avatar" className={classes.avatar}>1</Avatar>}
									title="Intel Corporation"
									subheader="Oct 2019 - ????"
								/>
								<Typography variant="body2" component="p">
									Learned ?
								</Typography>
							</CardContent>
							<CardActions className={classes.cardAction}>
								<Button size="small" onClick={() => window.open("https://intel.com/")}>Visit Company Page</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card className={classes.card}>
							<CardContent>
								<CardHeader className={classes.header}
									avatar={<Avatar aria-label="avatar" className={classes.avatar}>2</Avatar>}
									title="SoDA @ ASU"
									subheader="Oct 2018 - May 2020"
								/>
								<Typography variant="body2" component="p">
									Computer Science, B.S.
								</Typography>
								<Typography variant="body2" component="p">
									3.25 GPA
								</Typography>
							</CardContent>
							<CardActions className={classes.cardAction}>
								<Button size="small" onClick={() => window.open("https://thesoda.io")}>Visit Club Page</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card className={classes.card}>
							<CardContent>
								<CardHeader className={classes.header}
									avatar={<Avatar aria-label="avatar" className={classes.avatar}>3</Avatar>}
									title="Luminosity Academy"
									subheader="Aug 2019 - Dec 2019"
								/>
								<Typography variant="body2" component="p">
									Learned fundamentals of React and how to work with a team on a project
								</Typography>
							</CardContent>
							<CardActions className={classes.cardAction}>
								<Button size="small" onClick={() => window.open("https://theluminositylab.com/academy/")}>Visit School Page</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}