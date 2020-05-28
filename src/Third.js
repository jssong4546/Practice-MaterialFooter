import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TypoGraphy from '@material-ui/core/TypoGraphy';
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

export default function Third() {
  const classes = useStyles();
  return (
    <React.Fragment>

         <div>
             (주) 플라잉캣
           </div>
           <Grid md={8}>
           <Box display='flex' pt={2} justifyContent='space-between' >
             <div>
                 회사소개
             </div>
             <div>
                 이용약관
             </div>
             <div>
                 개인정보처리방침
             </div>
             <div>
                 이용안내
             </div>
             <div>
                 공지사항
             </div>

           </Box>
           </Grid>
           
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