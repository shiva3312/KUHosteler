import React from "react";
import { Snackbar,Alert } from '@mui/material';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    root:{
        top: theme.spacing(9)
    }
}))

function Notification(props) {

    const classes = useStyles();
    const {notify, setNotify} = props;

    const handleClose=(event , reason)=>{
        setNotify({
            ...notify,
            isOpen:false
        })
    }

    return (
        <Snackbar 
            open={notify.isOpen}
            autoHideDuration={5000}
            anchorOrigin ={{vertical:'top' , horizontal:'right'}}
            className= {classes.root}
            onClose ={handleClose}
        >
            <Alert severity = {notify.type} onClose ={handleClose}>
                {notify.message}
            </Alert>
    
        </Snackbar>
        );

}

export default Notification;


// possibl {type = error , warning, success , info}