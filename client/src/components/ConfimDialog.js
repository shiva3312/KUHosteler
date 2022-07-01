<<<<<<< HEAD
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

=======
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

>>>>>>> d15a7e1db4d4930437bb5c25e18c3b380559c70b
export default ConfimDialog;