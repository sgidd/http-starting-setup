
import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import EnhancedTableToolbar from '../EnhancedTableToolbar/EnhancedTableToolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import EnhancedTableHead from '../EnhancedTableHead/EnhancedTableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
import Switch from '@material-ui/core/Switch';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));

  function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }
  
  function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
  }
  




  export default function EnhancedTable(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const [rows, setRows] = React.useState(props.rows)
    const rows = props.rows;
    
  console.log(rows);
  console.log(props.rows);
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = event => {
      console.log(event.target.checked);

      // const allRows = this.state.rows;
      //   console.log(allRows);
      //   allRows.map(row => {
      //       row.timesheet = row.timesheet === 0 ? 1 : 0 ;
      //       row.digitalWall = row.digitalWall === 0 ? 1 : 0 ;
      //       row.sqcdp = row.sqcdp === 0 ? 1 : 0 ;
      //   })
      

      // props.handleSelectAllClick();
      
      if (event.target.checked) {
         const allRows = rows;
        // allRows.map(row => {
        //   row.timesheet = row.timesheet === 0 ? 1 : 0 ;
        //   row.digitalWall = row.digitalWall === 0 ? 1 : 0 ;
        //   row.sqcdp = row.sqcdp === 0 ? 1 : 0 ;
        // });
        allRows.map(row => {
          row.timesheet =  1;
          row.digitalWall =  1;
          row.sqcdp =  1;
        });
        setSelected(allRows);
        props.handleSelectAllClick(allRows);
        console.log(selected);
        return;
      }else {
        const allRows = rows;
        // allRows.map(row => {
        //   row.timesheet = row.timesheet === 0 ? 1 : 0 ;
        //   row.digitalWall = row.digitalWall === 0 ? 1 : 0 ;
        //   row.sqcdp = row.sqcdp === 0 ? 1 : 0 ;
        // });
        allRows.map(row => {
          row.timesheet = 0;
          row.digitalWall = 0 ;
          row.sqcdp = 0 ;
        });
        // setSelected(allRows);
        setSelected([]);
        props.handleSelectAllClick(allRows);
        console.log(selected);
        
      }
      // setSelected([]);

      console.log(selected)
    };
  
    const handleClick = (event, email) => {
      console.log(rows)
      console.log(selected)
      const selectedIndex = selected.indexOf(email);
      console.log(selectedIndex)
      let newSelected = [];
  
      // if (selectedIndex === -1) {
      //   newSelected = newSelected.concat(selected, email);
      // } else if (selectedIndex === 0) {
      //   newSelected = newSelected.concat(selected.slice(1));
      // } else if (selectedIndex === selected.length - 1) {
      //   newSelected = newSelected.concat(selected.slice(0, -1));
      // } else if (selectedIndex > 0) {
      //   newSelected = newSelected.concat(
      //     selected.slice(0, selectedIndex),
      //     selected.slice(selectedIndex + 1),
      //   );
      // }

      // const allRows = rows ;
      // allRows.map (row => {
      //   if(row.email === email){
      //     row.timesheet = row.timesheet === 0 ? 1 : 0 ;
      //     row.digitalWall = row.digitalWall === 0 ? 1 : 0 ;
      //     row.sqcdp = row.sqcdp === 0 ? 1 : 0 ;
      //   }else{
      //     row.timesheet = row.timesheet ;
      //     row.digitalWall = row.digitalWall  ;
      //     row.sqcdp = row.sqcdp ;
      //   }

      // })
  
      // setSelected(allRows);
      // props.handleClick(allRows);
      // console.log(selected);
      const allRows = rows ;
      let indexOfRow= null;
      allRows.map((row, i) => {
        if(row.email === email){
          indexOfRow = i;
        }
      })
      if (selectedIndex === -1) {
        console.log(indexOfRow)
      }
      let selectedRow = allRows[indexOfRow] ;
      console.log(selectedRow)
      // allRows[indexOfRow].timesheet =  allRows[indexOfRow].timesheet === 1 ?  0 : 0;
      // allRows[indexOfRow].digitalWall =  allRows[indexOfRow].digitalWall === 1 ?  0 : 0;
      // allRows[indexOfRow].sqcdp =  allRows[indexOfRow].sqcdp === 1 ? 0 : 0;
      if(selectedRow.timesheet || selectedRow.digitalWall || selectedRow.sqcdp){
        selectedRow.timesheet = 0;
        selectedRow.digitalWall = 0;
        selectedRow.sqcdp = 0;
      }else {
        selectedRow.timesheet = selectedRow.timesheet === 0 ? 1 : 0;
        selectedRow.digitalWall = selectedRow.digitalWall === 0 ? 1 : 0;
        selectedRow.sqcdp = selectedRow.sqcdp === 0 ? 1 : 0;
      }

      console.log(selectedRow);
      allRows[indexOfRow] = selectedRow;
      console.log(allRows);
      let setSelectedRows = [] ;
      allRows.map(row => {
        if(row.timesheet || row.digitalWall || row.sqcdp) { setSelectedRows.push (row)}
        
      });
      setSelected(setSelectedRows);
      console.log(selected)
      props.handleClick(allRows);
      console.log(selected)

    };

    
    // const handleToolClick = (event, email , name, tool) =>  {
    //   // props.rows.map (row => {
    //   //   if(row.name === name){
    //   //     row.timesheet = 1 ;
    //   //   }
    //   // });

    //   // console.log(props.rows);
    //   // setRows(props.rows);
    //   // console.log(rows);
    //   let newSelected = selected;
    //   console.log(selected)
    //  let  isObjFound = false;
     
    //  let objectId = null;

    // //  isObjFound = selected.map( obj => obj.email === email);
    // let i=0;
    // for(i; i<selected.length ; i++){
    //     if(selected[i].email === email ) {
    //        objectId = i ;
    //        console.log(i);
    //       //  newSelected[i].Tools.push(tool)
    //        isObjFound = true;
    //       }
    // }
    // let newObj= {
    //   'email' : null,
    //   'name' : null,
    //   'Tools': []
    // }
    //  console.log(isObjFound)
    //  if(!isObjFound){
    //   // newSelected = newSelected.concat(selected, {
    //   //   'email' : email,
    //   //   'Tools' : {tool}
    //   // });
    //   newObj.name = name;
    //   newObj.email = email;
    //   newObj.Tools.push(tool);
    //   newSelected.push(newObj);
    //  }else{
    //   newSelected[objectId].Tools.push(tool)

    //  }
    //  console.log(newSelected);
    //  console.log(selected);
    //  setSelected(newSelected);
    //  console.log(selected);
    //  props.handleRows(newSelected)
    // }
    
    const handleToolClick = (event, email , name, tool) =>  {
      console.log(rows);
      const rowIndex = rows.findIndex(row => row.email === email);
      console.log(rowIndex);
      console.log(tool)
      console.log(rows[rowIndex][tool]);
       rows[rowIndex][tool] =  rows[rowIndex][tool] === 0 ? 1 : 0;
       console.log(rows);

       let setSelectedRows = [] ;
       rows.map(row => {
         if(row.timesheet || row.digitalWall || row.sqcdp) { setSelectedRows.push (row)}
         
       });
       console.log(setSelectedRows)
       setSelected(setSelectedRows);
       props.handleToolClick(rows);
    }
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = event => {
      setDense(event.target.checked);
    };


    const deleteRowsHandler = (selectedRows) => {
        console.log(selectedRows)
        
        props.deleteRowsHandler(selectedRows);
        console.log(rows);
        setSelected([]);
    }
  
    const isSelected = email => selected.indexOf(email) !== -1;
    const checkToolSelected = (email) => selected.indexOf(email) !== -1 && 
    (selected[selected.indexOf(email)].Tools).indecOf("timesheet");
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} selectedRows = {selected} rows={rows}
          deleteHandle={deleteRowsHandler}/>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    // const isItemSelected = isSelected(row.email);
                    const isItemSelected = row.email && (row.timesheet || row.digitalWall || row.sqcdp );
                    console.log(isItemSelected)
                    console.log(rows)
                    const isTimesheetSelected = row.timesheet;
                    const isDigitalWallSelected = row.digitalWall;
                    const issqcdpSelected = row.sqcdp;
                    console.log(row)
                    const labelId = `enhanced-table-checkbox-${index}`;
  
                    return (
                      <TableRow
                        hover
                        
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox" onClick={event => handleClick(event, row.email)}>
                          <Checkbox
                          
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {row.id}
                        </TableCell>

                        <TableCell align="left" component="th" id={labelId} scope="row" padding="none">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="right" onClick={event => handleToolClick(event, row.email , row.name, 'timesheet')}>
                          {row.timesheet}
                        <Checkbox
                            checked={isTimesheetSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>

                        <TableCell
                         align="right"
                         onClick={event => handleToolClick(event, row.email , row.name, 'digitalWall')}>
                           {row.digitalWall}
                        <Checkbox
                            checked={isDigitalWallSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                          </TableCell>

                        <TableCell 
                          align="right"
                          onClick={event => handleToolClick(event, row.email , row.name, 'sqcdp')}>
                            {row.sqcdp}              
                        <Checkbox
                            checked={issqcdpSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        /> */}
      </div>
    );
  }
  
