import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Second() {
  const classes = useStyles();
  return (
    <React.Fragment>
         <Box pt={0}>

         </Box>
         <div>
             계좌번호
           </div>
           <div>
           우리은행 1005-603-420169
           </div>
           <div>
           (주) 플라잉캣
           </div>
    </React.Fragment>
  );
}

{/* <Title>Recent Deposits</Title>
<Typography component="p" variant="h4">
  $3,024.00
</Typography>
<Typography color="textSecondary" className={classes.depositContext}>
  on 15 March, 2019
</Typography>
<div>
  <Link color="primary" href="#" onClick={preventDefault}>
    View balance
  </Link>
</div> */}