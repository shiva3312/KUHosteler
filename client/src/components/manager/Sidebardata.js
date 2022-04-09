import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/manager/dashboard',
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
    title: 'Student ',
    path: '/manager/allstudents',
    icon: <IoIcons.IoMdSchool />,
    cName: 'nav-text'
  },
  {
    title: 'Staff',
    path: '/manager/allemployee',    
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Meal ',
    path: '/manager/todaymealList',
    icon: <IoIcons.IoMdPizza />,
    cName: 'nav-text'
  },
  {
    title: 'Notice',
    path: '/manager/notice',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }
];