import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '4:15'},
        {title: 'All star', duration: '5:05'},
        {title: 'I want it that way', duration: '4:31'},
        {title: 'Good bye', duration: '5:11'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;      //return new selected song
    }

    return selectedSong;    //return currently selected song
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});