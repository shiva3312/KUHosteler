import React from "react";
import {Dialog, Button} from '@material-ui/core'
 

function ConfimDialog(props) {

    const {confirmDialog, setConfirmDialog} = props;

  return (
    <Dialog open= {confirmDialog.isOpen}>       
        <div className="p-3">
            <h5 variant="h6">
                {confirmDialog.title}
            </h5>
            <p variant="subtitle2">
                {confirmDialog.subTitle}
            </p>
         </div>
        <div>
            <Button className=" text-dark" onClick={()=> setConfirmDialog({...confirmDialog , isOpen:false})}>No</Button>
            <Button className="text-primary"  onClick={ confirmDialog.onConfirm}>Yes</Button>
        </div>
    </Dialog>

  );
}

export default ConfimDialog;