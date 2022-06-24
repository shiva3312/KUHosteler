import React from "react";
import {Dialog, Button} from '@material-ui/core'
 

function ConfimDialog(props) {

    const {confirmDialog, setConfirmDialog} = props;

  return (
    <Dialog open= {confirmDialog.isOpen}>       
        <div className="p-4">
            <h5 variant=" ps-2">
                {confirmDialog.title}
            </h5>
            <div className="text-secondary fw-bold">
                
            
            <p variant=" subtitle2">
                {confirmDialog.subTitle}
            </p>
            </div>
         </div>
        <div className="text-end p-3 text-light bg-light">
            <Button className="bg-secondary text-white" onClick={()=> setConfirmDialog({...confirmDialog , isOpen:false})}>No</Button>
            <Button className="bg-primary ms-2 text-white"  onClick={ confirmDialog.onConfirm}>Yes</Button>
        </div>
    </Dialog>


  );
}

export default ConfimDialog;