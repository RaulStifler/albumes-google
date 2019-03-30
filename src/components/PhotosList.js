import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PhotosCarrousel from './PhotosCarrousel';

const PhotosList = props => {    
    function contenido(){
        if (props.album) {
            return (
                <Fragment>
                    <Typography variant="h5" component="h2">{props.album ? props.album.title : ''}</Typography>
                    <Button onClick={props.clearAlbum}>Atras</Button>
                    <Typography variant="headline" component="h3">Fotos del album</Typography>
                    <Typography variant="caption" component="p">{props.photos.length} foto(s) en este álbum.</Typography>
                    <PhotosCarrousel photos={props.photos}/>
                </Fragment>
            )
        }else{
            return (
                <Typography variant="h4" component="h2">Selecciona un álbum</Typography>
            )
        }
    }
    return(
        <div>
            { contenido() }
        </div>
    );
}

export default withStyles({

})(PhotosList);
