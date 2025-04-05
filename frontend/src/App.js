import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//import stylesheet (i thought id use this more but whatever)
import './styles.css';

//import page components
import Home from './components/Home';
import InventoryList from './components/InventoryList';
import FreshList from './components/FreshList';
import CheapList from './components/CheapList';
import AddInventory from './components/AddInventory';
import EditInventory from './components/EditInventory';

function App(){
    return (
        <Router>
            {/*define routes for app*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inventory" element={<InventoryList />} />
                <Route path="/inventory/fresh" element={<FreshList />} />
                <Route path="/inventory/cheap" element={<CheapList />} />
                <Route path="/inventory/add" element={<AddInventory />} />
                <Route path="/inventory/edit/:id" element={<EditInventory />} />
            </Routes>
        </Router>
    );
}

export default App;