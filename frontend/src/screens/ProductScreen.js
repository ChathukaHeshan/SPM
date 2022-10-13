import {
    Button,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    MenuItem,
    Select,
  } from '@material-ui/core';
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';
  import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
  import _ from 'lodash';
  import React, { useEffect, useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  
  import { listProductDetails } from '../actions/productActions';
  import Loader from '../components/Loader';
  import Message from '../components/Message';
  import Meta from '../components/Meta';
  import { RatingBar } from '../components/RatingBar';