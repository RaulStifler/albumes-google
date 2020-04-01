import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import AlbumCard from './AlbumCard';
import Box from '../animations/Box';
import {PoseGroup} from 'react-pose';

const AlbumsList = props => {
	return (
		<Grid container spacing={16} justify="center">
			<PoseGroup >
				{props.albumes.map((album,index)=> (
					<Box key={index} position={index} pose={props.albumSelected ? 'exit':'enter'}>
						<AlbumCard album={album} setAlbum={props.setAlbum}/>
					</Box>
				) )}
			</PoseGroup>
		</Grid>
	);
}

export default withStyles({

})(AlbumsList);