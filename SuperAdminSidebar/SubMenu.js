import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {SidebarLink, SidebarLabel, DropdownLink , SidebarContainer, SidebarDiv, Container , SidebarBtn} from '../Style/AddSuperAdminStyle';


const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = (e) => {
        e.preventDefault();
        setSubnav(!subnav)
    };
    return (
        <>
            <Link className="  flex  text-white  justify-between  items-center  p-5  text-lg  hover:bg-pink-600 hover:border-l-4 cursor-pointer"
                to={item.path} 
                onClick={item.subNav && showSubnav}>
            <div className=' flex items-center'>
                    {item.icon}
                <span className='ml-4'>
                    {item.title}
                </span>
            </div>
            <div>
                {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
            </Link>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link to={item.path} 
                            key={index} 
                            className="
                              bg-gray-800
                                pl-12
                                h-12
                                flex
                                items-center
                                text-blue-100
                                text-lg
                                hover:bg-pink-600
                                cursor-pointer">
                            {item.icon}
                            <span className='ml-4'>{item.title}</span>
                        </Link>
                    );
                })}
      </>
    );
};

export default SubMenu;