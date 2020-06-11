import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component{

    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div className = "item" key={song.title} >
                    <div className = "right floated content">
                        <button onClick = {()=> this.props.selectSong(song) } className = "ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        //console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>
    }

}

const mapStateToProps = (state) =>{  // Easy to understand name
    //console.log(state);
    return { songs : state.songs}; //object will showing in the SongList component
}

export default connect(mapStateToProps,{selectSong:selectSong})(SongList); 
// Call connect and then pass the Component as second function call, always define a "mapStateToProps" and to get the first argument of "state" , and alway
// going to return an  object that is going to show up as props inside of our component.

