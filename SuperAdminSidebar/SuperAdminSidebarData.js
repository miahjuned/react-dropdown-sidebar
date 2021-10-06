import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/super-admin/dashboard/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/super-admin/dashboard/manage-user/overview/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/super-admin/dashboard/overview/manage-users',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Users',
    path: '/super-admin/dashboard/manage-user/overview',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Customers',
        path: '/super-admin/dashboard/customers/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Vendors',
        path: '/super-admin/dashboard/vendors/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Admin',
        path: '/super-admin/dashboard/admin/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Super ADmin',
        path: '/super-admin/dashboard/super-admin/overview',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Products',
    path: '/super-admin/dashboard/products/overview',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All Products',
        path: '/super-admin/dashboard/all-products/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Review',
        path: '/super-admin/dashboard/review/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Orders',
        path: '/super-admin/dashboard/orders/overview',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Orders',
    path: '/dashboard/Orders/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Order Overview',
        path: '/dashboard/overview/manage-users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Order Review',
        path: '/dashboard/overview/add-users',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
