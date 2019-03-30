import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Box from '../animations/Box';
import {PoseGroup} from 'react-pose';

const PhotosCarrousel = props => {
	return(
		<div className={props.classes.container}>
			<PoseGroup>
				{props.photos.map((photo,index) => {
					return(
						<Box key={index} position={index} className={props.classes.card}>
							<Card>
								<img src={photo.baseUrl} alt={photo.filename} className={props.classes.img}/>
								<CardContent>
									<Typography variant="caption" component="p">
										{photo.filename}
									</Typography>
								</CardContent>
							</Card>
						</Box>
					)
				})}			
			</PoseGroup>
		</div>
	)
}

export default withStyles({
	container: {
		display: 'flex',
		flexDirection: 'row',
		overflowX: 'scroll',
		justifyContent: 'center',
		padding: '1em 0'
	},
	img: {
		maxWidth: '100%',
		height: 'auto'
	},
	card: {
		minWidth: '300px',
		marginRight: '1rem'
	}
})(PhotosCarrousel);