import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => (
    <div>
        <h1>Portfolio</h1>
        <p>Check out my work!</p>
        <Link to="/team/1">Album 1</Link>
        <Link to="/team/2">Album 2</Link>
        <Link to="/team/3">Album 3</Link>
    </div>
);

export default Team;