
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link } from 'react-router-dom';
import axios from 'axios';

function Review( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const feedback = useSelector( store => store.feedback );
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
      };
    
    const submitFeedback = () =>{
            console.log( ' in submitFeedback' );
            axios.post( '/feedback', feedback ).then( (response )=>{
                console.log( 'back from POST:', response.data );
                dispatch({type: "RESET", payload: ""})
                
            }).catch( ( err )=>{
                console.log(err);
                alert( 'nope' );
            })
        }

    
    return(
        <div>
            <h1>Review your feedback</h1>
            <h3>Feelings: {feedback[0]}</h3>
            <h3>Understandings: {feedback[1]}</h3>
            <h3>Supported: {feedback[2]}</h3>
            <h3>Comments: {feedback[3]}</h3>
           

            <Button 
               
                variant="contained" 
                underline="none" 
                
                onClick = {()=>{submitFeedback(); setOpen(true);}}>NEXT</Button>
                
                <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle
                    
                    id="alert-dialog-title">
                    {"Success!"}
                    </DialogTitle>
                    <DialogContent>
                        <CheckCircleIcon color = "success" sx={{ fontSize: 80 }}/>

                    <DialogContentText id="alert-dialog-description">
                        Thank you for your feedback. Would you like to complete another survey?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button
                    component = {Link}
                    to = "/ending" 
                    onClick={handleClose}>Disagree</Button>
                    <Button 
                    component = {Link}
                    to = "/"
                    onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
                </div>
        </div>
    )
}

export default Review;