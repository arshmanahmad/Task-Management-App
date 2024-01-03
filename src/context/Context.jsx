import React, { useState } from 'react'
import { createContext } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
    const id = Math.round(Math.random() * 100);


    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [tableData, setTableData] = useState([
        { id, name: "Arshman", post: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Shuja", post: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Hassan", post: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Hadi", post: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Hanan", post: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Zaid", post: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
        { id, name: "Ahmad", post: "Senior developer", date: "thursday", task: "Debugging", status: "active" },
    ]);
    const [links, setLinks] = useState([
        { link: "Admin panel" },
        { link: "User panel" },
        { link: "Help" },
        { link: "Contact" },
    ])
    const [adminAccess, setAdminAccess] = useState([
        { id, adminName: "Arshman", password: "Arsh#786", email: "Arsh@786" }
    ])
    return (
        <Context.Provider value={{ data, setData, tableData, setTableData, links, setLinks, searchData, setSearchData, adminAccess, setAdminAccess }}>
            {children}
        </Context.Provider>
    )
}

export default Context;
export { Provider };