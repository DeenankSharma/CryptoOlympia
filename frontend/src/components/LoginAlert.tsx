import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface LoginAlertProps{
    isAlertOpen :boolean;
    handleClose:()=>void
}

export default function AlertDialog(props:LoginAlertProps) {

  return (
    <React.Fragment>
      <Dialog
        open={props.isAlertOpen}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Login / Sign Up With Google
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Kindly Login or Sign Up before uploading a question
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}