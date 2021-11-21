
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl,FormHelperText, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Supported( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const dispatch = useDispatch();
    
    

    //variables
    const [supported, setSupported] = useState( '' );
    const [enableButton, setEnableButton ]= useState(true);//enabling the next button


    //functions
    const setScale = (event)=>{
        console.log( 'in setScale:', event.target.value );
        setSupported(event.target.value);
        if(event.target.value != ''){
            setEnableButton(false)
        }//end if

      }//end setScale

    
   


    return(
        <div>
            <h1>How well are you being supported?</h1>
    <Grid container
        justifyContent = "space-around"
        alignItems = "flex-end">   
        <FormControl  className = "inputField" sx={{width: 300}}>
        <InputLabel id="supported" >supported?</InputLabel>
        <Select
        labelId= "supported"
        value={supported}
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
      to = "/comments"
      onClick = {()=>dispatch({type: "ADD_FEEDBACK", payload: supported})}>NEXT</Button>
  </Grid>
    </div>
    
    )
}

export default Supported;