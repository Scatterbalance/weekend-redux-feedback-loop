
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl,FormHelperText, Grid} from '@material-ui/core';
import {Link } from 'react-router-dom';

function Feeling( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const dispatch = useDispatch();
    
    

    //variables
    const [feeling, setFeeling] = useState( '' );
    const [enableButton, setEnableButton ]= useState(true);//enabling the next button


    //functions
    const setScale = (event)=>{
        console.log( 'in setScale:', event.target.value );
        setFeeling(event.target.value);
        if(event.target.value != ''){
            setEnableButton(false)
        }//end if

      }//end setScale

    

   


    return(
        <div>

            <h1>How are you feeling today?</h1>
         
        <Grid container
        justifyContent = "space-around"
        alignItems = "flex-end">
        <FormControl  className = "inputField" sx={{width: 300}}>
        <InputLabel id="feeling" >Feeling?</InputLabel>
        <Select
        labelId= "feeling"
        value={feeling}
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
      to = "/understanding"
      onClick = {()=>dispatch({type: "ADD_FEEDBACK", payload: feeling})}>NEXT</Button>
  </Grid>
 
    </div>
    
    )
}

export default Feeling;