import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import $ from "jquery";


function GoToNotes (event) {
  $(".extension-toolbar-popup-main").hide();
  $(".extension-toolbar-popup-note").show(300);
};


export default function Collections() {

  function handlehoverhide (index:any){
    $(`#button-popup-${index}`).hide(100)
  }
  
  function handlehovershow (index:any){
    if($(`#button-popup-note-${index}`).css('display') == 'none')
      $(`#button-popup-${index}`).show(200)
  }

  function addbookmark (index:any){
    console.log(index)
    $(`#button-popup-${index}`).hide()    
    $(`#button-popup-note-${index}`).show(100)

  }

  return (
    <List sx={{ width: '100%'}} className='Collectionlist-popup'>
      {[0, 1, 2, 3, 5, 6].map((value,index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            onMouseLeave={handlehoverhide.bind(null, index)} 
            onMouseEnter={handlehovershow.bind(null, index)} 
            key={value}
            secondaryAction={
              <div>
                <Button onClick={addbookmark.bind(null, index)} variant="contained" color="success" id={`button-popup-${index}`} style={{display:'none'}}  >save</Button>
                <Button onClick={GoToNotes} variant="text" color="success" id={`button-popup-note-${index}`} style={{display:'none'}}  > Add a note </Button>
              </div>
              
            }
            disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  // src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
