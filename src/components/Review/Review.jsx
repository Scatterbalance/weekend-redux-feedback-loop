
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { TextField, Button, Select, MenuItem, InputLabel, FormControl,FormHelperText, Grid} from '@material-ui/core';
import {Link } from 'react-router-dom';
import axios from 'axios';

function Review( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const feedback = useSelector( store => store.feedback );
    const dispatch = useDispatch();
    const submitFeedback = () =>{
        let objectToSend = {feedback}
        console.log("objectToSend:", objectToSend);

    }
    return(
        <div>
            <h1>Review your feedback</h1>
            <p>{feedback.feeling}</p>
            <p>{feedback.understanding}</p>
            <p>{feedback.supported}</p>
            <p>{feedback.comment}</p>

            <Button 
               
                variant="contained" 
                underline="none" 
                component = {Link}
                to = "/"
                onClick = {()=>{submitFeedback, dispatch({type: "RESET", payload: ""})}}>NEXT</Button>
        </div>
    )
}

export default Review;