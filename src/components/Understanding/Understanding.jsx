
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl,FormHelperText, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';


function Understanding( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const feedback = useSelector( store => store.feedback );
    const dispatch = useDispatch();

   const [understanding, setunderstanding] = useState( '' );
   const [enableButton, setEnableButton ]= useState(true);//enabling the next button


 
    //functions
    const setScale = (event)=>{
        console.log( 'in setScale:', event.target.value );
        setunderstanding(event.target.value);
        if(event.target.value != ''){
            setEnableButton(false)
        }//end if

      }//end setScale

    

  


   return(
       <div>
           <h1>How well are you understanding the content?</h1>
           
           <Grid container
        justifyContent = "space-around"
        alignItems = "flex-end">
       <FormControl  className = "inputField" sx={{width: 300}}>
       <InputLabel id="understanding" >understanding?</InputLabel>
       <Select
       labelId= "understanding"
       value={understanding}
       onChange={setScale}
       >
       <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
     </Select>
     </FormControl>
     
   
 
     <Button 
      disabled = {enableButton} 
      variant="contained" 
      underline="none" 
      component = {Link}
      to = "/supported"
      onClick = {()=>dispatch({type: "ADD_UNDERSTANDING", payload: understanding})}>NEXT</Button>
  </Grid>
    </div>

   )
}

export default Understanding;