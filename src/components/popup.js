/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import $ from "jquery";
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PopupSearch from './search';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import getImg from "./getImg";
import CloseIcon from '@mui/icons-material/Close';
import NotesIcon from '@mui/icons-material/Notes';
import Collections from './collections';

function GoBack (event) {
    $(".extension-toolbar-popup-note").hide();
    $(".extension-toolbar-popup-main").show(200);
    
};

function closeBtn (event) {
    $('#extension-toolbar-popup').hide(100);
}
export default class Popup extends React.Component {
    collections = ['te']; //null; //['te']
    render() {
        return(
         <div className='extension-toolbar-popup'  id='extension-toolbar-popup' >
            <div className='extension-toolbar-popup-main'  >
                <PopupSearch></PopupSearch>
                { !this.collections  ?(
                    <div>
                        <span className='Collections-Empty-State'>
                            No saved collections yet...<br></br> create your first one today!
                        </span>
                        <div className='Add-new-collection' style={{ width: '100%'}}>
                        <List
                        sx={{ width: '100%'}}
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                            <ListItemButton>
                                <ListItemIcon>
                                <AddCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add new collection"  />
                            </ListItemButton>
                        </List>
                        </div>
                    </div>
                ):(
                    <div>
                        <br/>
                        <span className='poppup-side-text'>All Collections</span>
                        <div  style={{maxHeight:'310px',overflowX:'auto'}}>
                            <Collections  ></Collections>
                        </div>
                        <div  style={{ width: '100%'}}>
                            <List
                            sx={{ width: '100%'}}
                            component="nav"
                            aria-labelledby="nested-list-subheader">
                                <ListItemButton>
                                    <ListItemIcon>
                                    <AddCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add new collection"/>
                                </ListItemButton>
                            </List>
                        </div>
                        
                    </div>
                )}
   
                <br></br>
                <br></br>
               
            </div>
            <div className='extension-toolbar-popup-note'>
                <div className='extension-toolbar-popup-note-container1' >
                    <Button onClick={closeBtn} variant="text" style={{float:'right'}}><CloseIcon /> </Button>

                    <br></br>
                    <div style={{float:'left'}}>
                        <img src={getImg("./assets/true-sign.svg")} />
                        <span style={{fontWeight : 'bold', position : 'absolute' , padding : '10px'}}>Collection Name </span>
                    </div>
                </div>
                <div className='extension-toolbar-popup-note-container2' >
                    <div style={{float:'left', padding: "10px"}} >
                        <NotesIcon /><span style={{fontWeight : '500',  padding : '10px'}}> Add a note </span>
                    </div>
                    <TextField
                        sx={{ width:"250px "}}
                        label="Note"
                        multiline
                        maxRows={4}
                        color="success"
                        placeholder='This bag will be perfect for upcoming trip to Bermuda'
                    />
                    <br></br>
                    <br></br>
                    <div >
                        <Button onClick={GoBack} variant="text" color="success" style={{float:'left', margin :'15px'}}>Back</Button>
                        <Button variant="contained" color="success" style={{float:'right', margin :'15px'}}>Save</Button>
                    </div>
                    <br></br>

                </div>
            </div>
                
         </div>   
        )
    }
  }