import React, { useState } from 'react'
import './SideBar.css';
import { useContext } from 'react';
import Context from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import logo192 from "./logo192.png";

const SideBar = ({ value }) => {
    const navigate = useNavigate();
    const { links } = useContext(Context);
    const [activeLink, setActiveLink] = useState('');
    console.log(links);
    const handleClick = (index) => {
        setActiveLink(index);
    }
    const handlePathChange = () => {
        navigate("/User/AdminAccess");
    }
    return (
        <>
            <div className='main-container'>
                <div id='signature' className='signature flex-box'>
                    <div id='circle' className="circle flex-box">
                        <h1 className='main-heading' >{value}</h1>
                    </div>
                </div>
                <div className="btns">
                    {links.map((item, index) => {
                        let active = " ";
                        if (index === activeLink) {
                            active = "active-index";
                        }
                        if (item.link === "Admin panel") {
                            return (
                                <li onClick={handlePathChange} className={active}>
                                    <a href="" className='side-bar-btns' >{item.link}</a>
                                </li>
                            )
                        }
                        return (
                            <li onClick={() => handleClick(index)} className={active}>
                                <a href="" className='side-bar-btns' >{item.link}</a>
                            </li>
                        )
                    })}
                </div>
                <div className="paragraph">
                    <p className='para'>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. In
                        ullam quos voluptas odio, necessitatibus
                        eius vitae magni. Ad, a commodi mollitia
                        neque quisquam incidunt eius repellat
                        ducimus obcaecati aliquam at voluptatum,
                        expedita inventore amet possimus numquam
                        laborum iste cum quidem ipsum veritatis
                        officia molestias. Laborum eveniet saepe
                        consequuntur quisquam autem.</p>
                </div>
                <div className="img-container flex-box">
                    <img src={logo192} alt="" />
                </div>
            </div>
        </>
    )
}

export default SideBar