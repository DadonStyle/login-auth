import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 950,
  },
});

export const MenuBar = ()=> {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);//a number that changes and shift the focus to another button
  const routingHandler = (value) =>{
    if(value === 0) {
        history.push("/login")
    }
    if(value === 1) {
        history.push("/register")
    }
    if(value === 2) {
        history.push("/logout")
    }
    else{
        console.log(value)
    }
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      onClick={routingHandler(value)} 
    >
      <BottomNavigationAction label="Login" />
      <BottomNavigationAction label="Register" />
      <BottomNavigationAction label="Logout"  />
    </BottomNavigation>
  );
}
