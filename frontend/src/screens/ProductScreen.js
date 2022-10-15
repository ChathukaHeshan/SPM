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

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  
    checkIcon: {
      color: 'green',
    },
    addProduct: {
      color: 'green',
    },
    noIcon: {
      color: '#008080',
    },
    idCopy: {
      cursor: 'pointer',
    },
    footer: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  }));
  
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      backgroundColor:'#8FBC8B',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const ProductListScreen = ({ history, match }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
  
    const pageNumber = match.params.pageNumber || 1;
  
    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;
  
    const productDelete = useSelector((state) => state.productDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete;
  
    const productCreate = useSelector((state) => state.productCreate);
    const { loading: loadingCreate, error: errorCreate, success: successCreate } = productCreate;
  
    const {
      userLogin: { userInfo },
    } = useContext(UserContext);
  
    useEffect(() => {
      if (!userInfo || !userInfo.isAdmin) {
        history.push('/login');
      } else if (successCreate || userInfo.isAdmin) {
        dispatch({ type: PRODUCT_CREATE_RESET });
        dispatch(listProducts('', pageNumber));
      }
    }, [dispatch, history, userInfo, successDelete, successCreate, pageNumber]);
  
    const handleDelete = (id) => {
      if (window.confirm('Are you sure?')) {
        dispatch(deleteProduct(id));
      }
    };
  
    const createProductHandler = () => {
      dispatch(createProduct());
    };
  
    function exportPDF(){
      const unit = "pt";
      const size = "A4";
      const orientation = "portrait";
      const marginLeft = 40;
      const doc = new jsPDF(orientation, unit, size);
  
      doc.setFontSize(15);
      const title = "Product_Details_Report";
      const headers = [["NAME", "PRICE", "CATEGORY", "BRAND"]];
  
      const data = products.map(elt=>[elt.name, elt.price, elt.category, elt.brand]);
  
      let content = {
        startY: 50,
        head: headers,
        body: data
      };
  
      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      doc.save("report.pdf")
    }
  }