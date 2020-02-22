import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Card, CardContent, CardActions, Button, CardHeader, Avatar, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

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
	},
	card: {
		minWidth: 275,
		flexGrow: 1,
	},
	socials: {
		textAlign: 'center',
		alignContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(3),
		paddingTop: theme.spacing(0),
	}
}));

export default function App() {
	const classes = useStyles();
	//const theme = useTheme();
	const [open, setOpen] = React.useState(true);

	return (
		<div style={{marginTop: '3%'}}>
			<Snackbar
				open={open}
				anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
				autoHideDuration={6000}
				message="Mobile not yet optimized"
				action={
					<React.Fragment>
					  <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpen(false)}>
						<CloseIcon fontSize="small" />
					  </IconButton>
					</React.Fragment>
				  }
				onClose={() => setOpen(false)}
			/>

			<Typography variant='h2' align='center'>Darren Vasquez</Typography>
			<Container maxwidth='md' className={classes.intro}>
				<Typography variant='h5' className={classes.paper}>
					<center>Work in Progress! <br/>Meant to be a simple website showcasing a bit about me.</center>
				</Typography>
			</Container>
			<Container maxwidth='md' className={classes.socials}>
				  <IconButton size="medium" aria-label="close" color="inherit" onClick={() => window.open("https://twitter.com/darrenvasquez13")}>
				  	<TwitterIcon fontSize="medium"/>
				  </IconButton>
				  <IconButton size="medium" aria-label="close" color="inherit" onClick={() => window.open("https://instagram.com/darrenvasquez")}>
				  	<InstagramIcon fontSize="medium"/>
				  </IconButton>
				  <IconButton size="medium" aria-label="close" color="inherit" onClick={() => window.open("https://github.com/darrenvasquez")}>
				  	<GitHubIcon fontSize="medium"/>
				  </IconButton>
			</Container>
			<Container maxWidth='md' className={classes.root}>
				<Typography variant="h5" className={classes.paper}>Education</Typography>
				<Grid container spacing={3} wrap='wrap' alignContent='flex-start' alignItems='flex-start'>
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
								<Button size="small" onClick={() => window.open("https://theluminositylab.com/academy/")}>Visit Academy Page</Button>
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
									Utilize C# and SQL to query, interpret, and post data on lithography tools.
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
									Maintained and improved club website and organized tech talks for members.
								</Typography>
							</CardContent>
							<CardActions className={classes.cardAction}>
								<Button size="small" onClick={() => window.open("https://thesoda.io")}>Visit Club Page</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}