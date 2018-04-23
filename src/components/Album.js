import React from 'react';
import Instafeed from 'react-instafeed';

const Album = (props) => (
    <div>
        <h1>Album {props.match.params.name}</h1>
        <p>Photos here!</p>
    </div>
);

const instafeedTarget = () => (
    <div id={instafeedTarget}>
        <Instafeed
            limit='5'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={instafeedTarget}
            template=''
            userId='userIdInstagramApiString'
            clientId='clientIdInstagramApiString'
            accessToken='accessTokenInstagramApiString'/>
    </div>
);

export default Album;