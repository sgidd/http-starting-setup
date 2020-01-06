import React , {Component} from 'react';
import EnhancedTable from '../EnhancedTable/EnhancedTable';
import axios from '../../../axios';


function createData(id, name, email, timesheet, digitalWall, sqcdp) {
    return { id, name, email, timesheet, digitalWall, sqcdp };
  }
  
//   const rows = [
//     createData(1, 'sunil', 'sunilgidd051@gmail.com',0,0,0),
//     createData(2, 'sgidd',  'sunilgidd052@gmail.com',0,0,0),
//     createData(3, 'sgidd2',  'sunilgidd053@gmail.com',0,0,0),
    
//   ];


class Table extends Component {

    state= {
        rows : [],
        
    }

    componentDidMount() {
        axios.get('/users/')
        .then(response => {
            console.log(response);
            let result = response.data.map(d => 
                createData(d.id, d.name, d.email,0,0,0)
            );
            console.log(result);
            this.setState({rows: result})
        })
        .catch(error => {
            console.log(error)
        })
    }

    deleteRowsHandler = (selectedRows) => {
        console.log(selectedRows);
        let rows = this.state.rows;
        console.log(rows);
        // selectedRows.map(r => {
        // rows.map( (row, i)  => {
        //     console.log(row);
        //     // console.log(row.name +' '+ i)
            
        //           console.log(r)
        //         //  console.log(row)
        //          if(r.email === row.email){
        //             rows.splice(i,1)
        //              console.log(this.state.rows)
        //          }
        //      })
        //  })

        rows= rows.filter(function(cv){
            console.log(cv.email)
            return !selectedRows.find(function(e){
                console.log(e.email)
                console.log(e.email == cv.email)
                return e.email == cv.email;
            });
            console.log(rows);
        });

         console.log(rows)
        this.setState({rows })
    }


    shouldComponentUpdate(nextProps, nextState){
        // return nextState.rows.length !== this.state.rows.length;
        console.log(nextState.rows)
        return true;
    }

    componentDidUpdate(){
        console.log('table did update')
    }

    handleRows = (newRows) => {
        console.log(newRows);
        let stateRows = this.state.rows;
        console.log(stateRows);
       
        const rows = newRows.map(row => ({
            name : row.name,
            email: row.email,
            timesheet : row.Tools.indexOf('timesheet') !== -1 ? 1:0,
            digitalWall: row.Tools.indexOf('digitalWall') !== -1 ? 1:0,
            sqcdp: row.Tools.indexOf('sqcdp') !== -1 ? 1 : 0
            
        }))

     
        console.log(rows);

        rows.map((row ,i) => {
            stateRows.map( (stateRow ,i) => {
                if( stateRow.email === row.email) {
                    console.log(stateRows[i].name)
                    console.log(row.name)
                    row.name = stateRows[i].name
                    stateRows[i] = row;
                    
                }
                
                
            })

        })

        // for(let i=0; i<rows.length;i++){
        //     for(let j=0; j<stateRows.length ; j++){
        //         if(rows[i].email === stateRows[j].email){
        //             rows[i].name = stateRows[i].name;
        //             stateRows[i] = rows[i];
        //         }
        //     }
        // }

      
        console.log(stateRows)
        
        this.setState({rows :stateRows });
    }

    handleSelectAllClick = (allRows) => {
        // const allRows = this.state.rows;
        // console.log(allRows);
        // allRows.map(row => {
        //     row.timesheet = row.timesheet === 0 ? 1 : 0 ;
        //     row.digitalWall = row.digitalWall === 0 ? 1 : 0 ;
        //     row.sqcdp = row.sqcdp === 0 ? 1 : 0 ;
        // })

        // console.log(allRows);

        this.setState({rows: allRows});
    }

    handleRowClick = (selectedRows) => {
        this.setState({rows: selectedRows})
    }

    handleToolClick = (rows) => {
        this.setState({rows})
    }

    render() {
        console.log(this.state.rows)
        return (
            <EnhancedTable rows = {this.state.rows} deleteRowsHandler={this.deleteRowsHandler} 
            handleToolClick = {this.handleToolClick}
            handleSelectAllClick = {this.handleSelectAllClick}
            handleClick = {this.handleRowClick}/>
        );
    }
}

export default Table;