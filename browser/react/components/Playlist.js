import React from 'react';
import Songs from './Songs';

class Playlist extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.selectPlaylist(this.props.routeParams.playlistId);

  }

  componentWillReceiveProps (nextProps) {
    if (this.props.routeParams.playlistId !== nextProps.routeParams.playlistId){
      this.props.selectPlaylist(nextProps.routeParams.playlistId);
    }
  }


  render () {
    const playlist = this.props.selectedPlaylist;
    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs song={playlist.songs} />
        {playlist.song && !playlist.songs.length && <small>No Songs.</small> }
        <hr />
      </div>
    )
  }
}



export default Playlist;
