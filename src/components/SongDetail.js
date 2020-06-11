import React from  'react';
import {connect} from  'react-redux';

const SongDetail  = (MySeleSong) =>{
    //console.log({MySeleSong});
    if(!MySeleSong.MySeleSong){
        return<div>Select a song</div>;
    }

    return (
        <div>
            <h3>Details for</h3>
            <p>
                Title: {MySeleSong.MySeleSong.title}
                <br />
                Duration: {MySeleSong.MySeleSong.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {MySeleSong: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);