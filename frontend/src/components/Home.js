import React from 'react';
import {link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to the Sunderland Bakery Inventory System!</h1>
            <ul>
                {/*navigation links to each page*/}
                <li><Link to="/inventory">View All</Link></li>
                <li><Link to="/inventory/fresh">Freshest Items</Link></li>
                <li><Link to="/inventory/cheap">Cheapest Items</Link></li>
                <li><Link to="/inventory/add"></Link>Add New Items</li>
            </ul>
        </div>
    );
}

export default Home;