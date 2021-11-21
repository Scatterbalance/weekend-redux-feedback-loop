
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button,  Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Comments( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const dispatch = useDispatch();
    const [enableButton, setEnableButton ]= useState(true);//enabling the next button
    
    

    //variables
    const [comments, setComments] = useState( '' );
    


    //functions
    const getComments = (event)=>{
        console.log( 'in getcomment:', event.target.value );
        setComments(event.target.value);
       
         

      }//end get comments


    return(
        <div>
            <h1>any additional comments?</h1>
            <Grid container
        justifyContent = "space-around"
        alignItems = "flex-start">
            <Grid item
            sm={6}>
            <TextField
            fullWidth
            multiline
            maxRows = {8}
            placeholder="comment" 
            onChange={ (event)=>getComments(event)}/>
            </Grid>


      <Button 
      variant="contained" 
      underline="none" 
      component = {Link}
      to = "/review"
      onClick = {()=>dispatch({type: "ADD_FEEDBACK", payload: comments})}>NEXT</Button>
  </Grid>
    </div>
            
    )
}

export default Comments;