import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import TwitterIcon from '@material-ui/icons/Twitter';
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
	//const theme = useTheme();
	const [open, setOpen] = React.useState(true);

	return (
		<Grid container spacing={0} align="center" justify="center" direction="column">
			<Grid item>

					<Snackbar
						open={open}
						anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
						autoHideDuration={6000}
						message="Work in Progress"
						action={
							<React.Fragment>
							<IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpen(false)}>
								<CloseIcon fontSize="small" />
							</IconButton>
							</React.Fragment>
						}
						onClose={() => setOpen(false)}
					/>
					<Container maxwidth='md' className={classes.intro}>
						<Typography variant='h2'>
							<center>Darren Vasquez</center>
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
						<IconButton size="medium" aria-label="close" color="inherit" onClick={() => window.open("https://www.linkedin.com/in/darrenvasquez13/")}>
							<LinkedInIcon fontSize="medium"/>
						</IconButton>
					</Container>

			</Grid>
		</Grid>	
	);
}