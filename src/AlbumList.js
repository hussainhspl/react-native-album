import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state ({
    //         loaded: false
    //     })
    // }

    state = { albums: [] };
     
    componentDidMount = () => {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                response => this.setState({ albums: response.data })
            );
    }
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }
    render() {
        //console.log('data', this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
export default AlbumList;
