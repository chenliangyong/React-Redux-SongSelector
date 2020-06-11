import React from 'react';

//import {selectSong} from '../actions'; // if from a directry,it default point to index.js in the directry.  {} for multiple components import
import SongList from  './SongList';
import SongDetail from  './SongDetail';
c
const App = () =>{
    return (
        <div className = "ui container grid">
            <div className = "ui row">
                <div className = "column eight wide">
                    <SongList />
                </div>
                <div className = "column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
        );
    };



export default App;
