import React from 'react';
import { Link } from 'react-router-dom';

const Coaches = () => (
    <div>
        <div>
            <h1>Coaches</h1>
            <Link to="/coaches/sue">Ms. Sue</Link>
            <Link to="/coaches/chris">Sr. Chris</Link>
        </div>
    </div>
);

export default Coaches;
