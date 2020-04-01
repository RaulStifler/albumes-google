import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const AlbumCard = props => {
	return(
		<Card className={props.classes.item} onClick={()=>props.setAlbum(props.album)}>
			<CardMedia className={props.classes.media} image={props.album.coverPhotoBaseUrl}/>
			<CardContent>
				<Typography variant="h5" component="h2">{props.album.title}</Typography>
				<Typography component="p">{props.album.mediaItemsCount} foto(s)</Typography>
			</CardContent>
		</Card>
	);
}

export default withStyles({
	item: {
		minWidth: '350px',
		margin: '1rem',
		boxSizing: 'border-box',
		cursor: 'pointer'
	},
	media: {
		minHeight: '200px'
	}
})(AlbumCard);