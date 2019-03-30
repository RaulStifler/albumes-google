import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import AlbumCard from './AlbumCard';

const AlbumsList = props => {
	return (
		<Grid container spacing={16} justify="center">
			{props.albumes.map((album,index)=> <AlbumCard key={index} album={album} setAlbum={props.setAlbum}/> )}
		</Grid>
	);
}

export default withStyles({

})(AlbumsList);