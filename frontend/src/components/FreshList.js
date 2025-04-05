import React, {useEffect, useState} from 'react'
import axios from 'axios';

function FreshList() {
    const [freshItems, setFreshItems] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/bakeryList')
        .then(response => {
            //filter items made today or yesterday
            const today = new Date();
            const yesterday = new Date();
            yesterday.setDate(today.getDate()-1);
            const fresh = response.data.filter(item => {
                const madeDate = new Date(item.date);
                return madeDate>=yesterday;
            });
            setFreshItems(fresh);
        });
    }, []);

    return(
        <div>
            <h2>Fresh Baked Goods</h2>
            <ul>
                {freshItems.map(item => (
                    <li key={item.id}>{item.name} - Made: {item.date}</li>
                ))}
            </ul>
        </div>
    );
}

export default FreshList;