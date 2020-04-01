import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PhotosCarrousel from './PhotosCarrousel';

const PhotosList = props => {    
    function clear(){
        props.clearAlbum();
        props.clearPhotos();
    }

    function contenido(){
        if (props.album) {
            return (
                <Fragment>
                    <Typography variant="h5" component="h2">{props.album ? props.album.title : ''}</Typography>
                    <Button onClick={clear}>Atras</Button>
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
        <div className={props.classes.toSpace}>
            { props.token && contenido() }
            { !props.token && 
                <Typography variant="h4" component="h2">Inicia sesión</Typography>
             }
        </div>
    );
}

export default withStyles({
    toSpace: {
        marginTop: '2rem'
    }
})(PhotosList);
