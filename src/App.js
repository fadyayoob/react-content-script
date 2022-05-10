import './App.css';
import Button from './components/button';
import Popup from './components/popup';
import * as React from 'react';
import $ from "jquery";
import getImg from "./components/getImg";

let show=0;

function initPopup(e){
  $(".extension-toolbar-popup-main").show();
  $(".extension-toolbar-popup-note").hide();
}

function showHide(){
  show = !show;
  if(show){
    initPopup()
    $('#extension-toolbar-popup').show(300);
    $('#bookmarkBtn').addClass('extension-toolbar-btns-active')
    $('#bookmarkBtn img').attr('src',getImg("./assets/bookmarkActive.svg"))

  }else{
    $('#extension-toolbar-popup').hide(100);
    $('#bookmarkBtn').removeClass('extension-toolbar-btns-active')
    $('#bookmarkBtn img').attr('src',getImg("./assets/bookmark.svg"))
  }
}

function App() {
  
  return (
    <div className="App">
      <div className='extension-toolbar'>
        <center>
          <div onClick={showHide} id="bookmarkBtn">
           <Button icon={getImg("./assets/bookmark.svg")}  tooltip="Bookmark Page (option+s)" ID_Tip="bookmark"></Button>
          </div>  
          <Button icon={getImg("./assets/dashboard.svg")} tooltip="Open Yureka (option+o)" ID_Tip="dashboard"></Button>  
          <Button icon={getImg("./assets/info.svg")} tooltip="Quick Tutorial & Help" ID_Tip="info"></Button>  
          <Button icon={getImg("./assets/settings.svg")} tooltip="Settings" ID_Tip="settings"></Button>  
          <Button icon={getImg("./assets/close.svg")} tooltip="Hide toolbar on this website (shift+click to disable)" ID_Tip="close"></Button>  
        </center>
        <Popup></Popup>
      </div>
    </div>
  )
}

export default App;
