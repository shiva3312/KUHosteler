import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Payment',
    path: '/reports',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Student Manage',
    path: '/studentmng',
    icon: <IoIcons.IoMdSchool />,
    cName: 'nav-text'
  },
  {
    title: 'Staff',
    path: '/staff',
    
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Meal manage',
    path: '/meal',
    icon: <IoIcons.IoMdPizza />,
    cName: 'nav-text'
  },
  {
    title: 'Notice',
    path: '/noticesupport',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }
];