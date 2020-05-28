import React from 'react';
import { useTheme } from '@material-ui/core/styles';
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
import TypoGraphy from '@material-ui/core/TypoGraphy';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function First() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box pt={0}>
        <div>고객 센터</div>
        <Grid  xs={12} md={12} lg={12} style={{backgroundColor: 'transparent'}}>
        <Table size="small">

        <TableBody >
          {/* {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))} */}
          <TableRow>
            <TableCell style={{borderBottom: 0}}>
              <Box display='flex' justifyContent='space-between'>
            <Button style={{ border: 'solid 1px #c8c8c8'}}>
          카카오톡 문의
        </Button>
        <div>
        <TypoGraphy variant="body2" color="textSecondary" align="center">
          월~금: 오전 11시~오후 6시
          </TypoGraphy>
          <TypoGraphy variant="body2" color="textSecondary" align="center">
          토요일, 일요일, 공휴일 휴무
          </TypoGraphy>

        </div>
        </Box>
            </TableCell>
            
          </TableRow>
        </TableBody>
      </Table>
      </Grid>

        
      </Box>

    </React.Fragment>
  );
}