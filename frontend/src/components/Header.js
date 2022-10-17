import { Badge } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { isEmpty } from 'lodash';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import UserContext from '../context/UserContext';
import SearchBox from './SearchBox';
import UserInfoMenu from './UserInfoMenu';