import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
	intro: {
		flexGrow: 1,
		padding: theme.spacing(3),
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

	return (
		<Grid container spacing={0} align="center" justify="center" direction="column">
			<Grid item>
					<Container maxwidth='md' className={classes.intro}>
						<Typography variant='h2'>
							<center>Darren Vasquez</center>
						</Typography>
						<br/>
						<Typography variant='h4'>
							<center>Seattle, Washington</center>
						</Typography>
					</Container>
					<Container maxwidth='md' className={classes.socials}>
						<IconButton size="medium" aria-label="close" color="inherit" href="https://instagram.com/darrenvasquez">
							<InstagramIcon fontSize="medium"/>
						</IconButton>
						<IconButton size="medium" aria-label="close" color="inherit" href="https://github.com/darrenvasquez">
							<GitHubIcon fontSize="medium"/>
						</IconButton>
						<IconButton size="medium" aria-label="close" color="inherit" href="https://www.linkedin.com/in/darrenvasquez13/">
							<LinkedInIcon fontSize="medium"/>
						</IconButton>
					</Container>
			</Grid>
		</Grid>	
	);
}