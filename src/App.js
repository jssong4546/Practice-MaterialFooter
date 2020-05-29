import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";


import { mainListItems, secondaryListItems } from './Fourth';
import First from './First';
import Second from './Second';
import Orders from './Orders';
import Third from './Third';
import Fourth from './Fourth';

function Copyright() {
  return (
    <Grid>
    <Typography variant="body2" color="textSecondary" align="center">
    (주)플라잉캣은 결제 정보의 중개 서비스 또는 통신판매중개시스템의 제공자로서, 통신판매의 당사자가 아니며 소비자 분쟁 발생 시 당사에서 중재하며, 배송·환불·CS 등 의 책임은 (주)플라잉캣에 있습니다. 또한 해외 사이트에서 상품을 대량 소싱하는 쇼핑몰 특성상 일부 상품이 상표권 및 지적재산권을 침해하게 되는 경우가 발생할 수 있습니다. 고객센터로 연락주시면 최대한 빠르게 처리하겠습니다.
    </Typography>
    
    <Box style={{textAlign: 'end'}} justifyContent='flex-end' display='flex'>
      <div>
        instagram
      </div>
      <div style={{width: 15}}>
        {'   '}
      </div>
      <div>
        youtube
      </div>
    </Box>
    <Typography variant="body2" color="textSecondary" align="center">
      Companyright (c) 2020 Flyingcat.com all Rights reserved
    </Typography>
    </Grid>
  );
}

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {

  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 150,
  },
}));


const theme = createMuiTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 800,
      xl: 1200
    }
  }
});



export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const matches600 = useMediaQuery('(min-width:600px)');
  const matchesBelow600 = useMediaQuery('(max-width:600px)');
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <MuiThemeProvider theme={theme}>
    <Container maxWidth="lg" className={classes.container}>
    <Grid container xs={12} >

    <Fourth />
    </Grid>
    


    <Box pt={4}>
      <Copyright />
    </Box>
  </Container>
  </MuiThemeProvider>
  )

  return (
    <div className={classes.root}>

      <CssBaseline />
    
      {
        matches600 ? <div>matches600</div> : null
      }
      {
        matchesBelow600 ? <div>matchesBelow600</div> : null
      }
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        

      </main>
    </div>
  );
}

// <Grid container spacing={1} >
            
// <Grid container lg={6}>
//   <Grid item xs={12} md={12} lg={12} className={fixedHeightPaper} style={{backgroundColor: 'hotpink'}}>

//   <First />

// </Grid>
// </Grid>
// <Grid container lg={6} md={12} spacing={0}>
// {/* Chart */}
// <Grid item xs={12} md={7} lg={7} className={fixedHeightPaper} style={{backgroundColor: 'tan'}}>
  
//   <First />

// </Grid>
// {/* Recent Deposits */}
// <Grid item xs={12} md={5} lg={5} className={fixedHeightPaper} style={{backgroundColor: 'powderblue'}}>

//   <Second />

// </Grid>
// {/* Recent Orders */}

// </Grid>

// </Grid>