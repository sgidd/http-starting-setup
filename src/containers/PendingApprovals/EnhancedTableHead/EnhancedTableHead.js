import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';

const headCells = [
    { id: 'id', numeric: false, disablePadding: true, label: 'Id' },  
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email Id' },
    { id: 'timesheet', numeric: true, disablePadding: false, label: 'Timesheet' },
    { id: 'digitalWall', numeric: true, disablePadding: false, label: 'Digital Wall' },
    { id: 'sqcdp', numeric: true, disablePadding: false, label: 'SQCDP' },
  ];

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    console.log(numSelected)
    console.log(rowCount)
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox"
          //  style={{borderBottom:'1px solid #10069f'}}
           >
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount && numSelected >0}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
              style ={{
                // color: "#00e676",
                // color: "#10069f"
              }}
            />
          </TableCell>
          {headCells.map(headCell => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
              // style={{fontWeight: 'bold', borderBottom:'1px solid #10069f'}}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  

  export default EnhancedTableHead;