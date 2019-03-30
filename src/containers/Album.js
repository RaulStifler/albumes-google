import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setPhotos, clearPhotos, clearAlbum } from '../actions/';
import axios from 'axios';
import PhotosList from '../components/PhotosList';

class Album extends Component {
    componentDidUpdate(prevProps){
        if (this.props.albumSelected && this.props.albumSelected !== prevProps.albumSelected) {
            if (process.env.NODE_ENV === 'production') {
            this.loadPhotos();
        } else {
            import('../data/photos').then(module => {
                this.props.setPhotos(module.default.mediaItems)
            });       
        }}
    }

    loadPhotos(){
        axios({
            method: 'POST',
            url: 'https://photoslibrary.googleapis.com/v1/mediaItems:search',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            },
            data: {
                albumId: this.props.albumSelected.id
            }
        }).then(result => {
            this.props.setPhotos(result.data.mediaItems);
        }).catch(error => {
            console.log(error);
        })
    }

    render(){
        return(
            <PhotosList 
                album={this.props.albumSelected} 
                photos={this.props.photos} 
                token={this.props.token}
                clearPhotos={this.props.clearPhotos}
                clearAlbum={this.props.clearAlbum}/>
        );
    }
}

const mapStateToProps = state =>({
    token: state.token,
    albumSelected: state.albumSelected,
    photos: state.photos
})

const mapDispatchToProps = {
    setPhotos,
    clearPhotos,
    clearAlbum
}
export default connect(mapStateToProps,mapDispatchToProps)(Album);
