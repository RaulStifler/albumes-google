import React,{Component} from 'react';
import { connect } from 'react-redux';
import { setAlbumes, clearAlbumes, setAlbum } from '../actions/';
import axios from 'axios';
import AlbumsList from '../components/AlbumsList';

class Albumes extends Component {
    componentDidUpdate(){
        if (this.props.token) {
            if (process.env.NODE_ENV === 'production' && this.props.token) {            
                this.loadAlbumes();
            } else {
                import('../data/albums').then(module => {
                    this.props.setAlbumes(module.default.albums)
                });       
            }
        }
    }
    loadAlbumes(){
        axios({
            url: 'https://photoslibrary.googleapis.com/v1/albums',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            }
        }).then(result => {
            this.props.setAlbumes(result.data.albums);
        }).catch(console.log);
    }    
    
    render(){
        return(
            <div>
                {this.props.albumes &&
                <AlbumsList 
                    albumes={this.props.albumes}
                    setAlbum={this.props.setAlbum}
                    albumSelected={this.props.albumSelected}/>}
            </div>
        );
    }    
}

const mapStateToProps = state => ({
    token: state.token,
    albumes: state.albumes,
    albumSelected: state.albumSelected
})

const mapDispatchToProps = {
    setAlbumes,
    clearAlbumes,
    setAlbum
}
export default connect(mapStateToProps,mapDispatchToProps)(Albumes);