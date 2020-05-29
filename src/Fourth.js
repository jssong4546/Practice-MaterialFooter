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
import * as MaterialUi from  '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  {
    imageSrc: 'https://ae01.alicdn.com/kf/HTB1S8MOQVXXXXcAapXXq6xXFXXXB/5-Bijoux-AE319.jpg_640x640q70.jpg',
    goodsPrice: 22600,

  },
  {
    imageSrc: 'https://ae01.alicdn.com/kf/HTB1S8MOQVXXXXcAapXXq6xXFXXXB/5-Bijoux-AE319.jpg_640x640q70.jpg',
    goodsPrice: 22600,

  },
  {
    imageSrc: 'https://ae01.alicdn.com/kf/HTB1S8MOQVXXXXcAapXXq6xXFXXXB/5-Bijoux-AE319.jpg_640x640q70.jpg',
    goodsPrice: 22600,

  },
  {
    imageSrc: 'https://ae01.alicdn.com/kf/HTB1S8MOQVXXXXcAapXXq6xXFXXXB/5-Bijoux-AE319.jpg_640x640q70.jpg',
    goodsPrice: 22600,

  },
  {
    imageSrc: 'https://ae01.alicdn.com/kf/HTB1S8MOQVXXXXcAapXXq6xXFXXXB/5-Bijoux-AE319.jpg_640x640q70.jpg',
    goodsPrice: 22600,

  },
  {
    imageSrc: 'https://ae01.alicdn.com/kf/HTB1S8MOQVXXXXcAapXXq6xXFXXXB/5-Bijoux-AE319.jpg_640x640q70.jpg',
    goodsPrice: 22600,

  },
  {
    imageSrc: 'https://ae01.alicdn.com/kf/HTB1S8MOQVXXXXcAapXXq6xXFXXXB/5-Bijoux-AE319.jpg_640x640q70.jpg',
    goodsPrice: 22600,

  },
  {
    imageSrc: 'https://ae01.alicdn.com/kf/HTB1S8MOQVXXXXcAapXXq6xXFXXXB/5-Bijoux-AE319.jpg_640x640q70.jpg',
    goodsPrice: 22600,

  },

];

const imgSizeObj = {
  pc: {
    maxWidth: 150,
    minWidth: 150,
    minHeight: 150,
    maxHeight: 300,
  },
  tablet: {
    maxWidth: 150,
    minWidth: 150,
    minHeight: 150,
    maxHeight: 300,
  },
  mobile: {
    width: 104,
    height: 104
  }
}

export default function Fourth() {
  const theme = useTheme();
  const matches800 = useMediaQuery('(min-width:800px)');
  const matches1000 = useMediaQuery('(min-width:1000)');
  const matchesBelow600 = useMediaQuery('(max-width:600px)');
  const imgKey = matches1000 ? 'pc' : matches800 ? 'tablet' : 'mobile'

  return (
    <React.Fragment>
      <MaterialUi.Container  style={{backgroundColor: 'tan', width: '100%', minWidth: '90%' }}>
      <Grid container   pt={0} display='flex'  style={{backgroundColor: 'tan'}} 
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        
        {data.map((item,index) => {

          return (
            <Grid md={3} xs={12} padding={5} container  >
              <Grid xs={5} md={12} style={{}} >
              <img src={item.imageSrc} style={imgSizeObj[imgKey]}  />
              </Grid>
              <Grid xs={7} style={{backgroundColor: 'powderblue'}}>
                <div>
                  플라잉캣에서만!
                </div>
                <Grid style={{textAlign: 'end',width: '90%'}}>
                  {item.goodsPrice}
                </Grid>
                <Grid container item>
                <Grid container item style={{justifyContent:'space-between', width: '90%'}}>
                <div>
                  n사
                </div>
                <div>
                  25000원
                </div>
                </Grid>
                <Grid container item style={{justifyContent:'space-between', width: '90%'}}>
                <div>
                  n사
                </div>
                <div>
                  25000원
                </div>
                </Grid>
                </Grid>
              </Grid>
              
            </Grid>
          )
        })}
      </Grid>
      </MaterialUi.Container>

    </React.Fragment>
  );
}