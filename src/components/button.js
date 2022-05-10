/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import $ from "jquery";
import ButtonMUI from '@mui/material/Button';


export default class Button extends React.Component {
     tooltipshow (id){
        if(id){
            $('#extension-toolbar-tooltip-'+id).show(50);
        }
    }
    
    tooltiphide (id){
        if(id){
            $('#extension-toolbar-tooltip-'+id).hide(50);
        }
    }
    
    render() {
        return(
         <div className='extension-toolbar-btns' >
            <ButtonMUI variant="text" style={{ minWidth: '15px'}} >
             <img  
             src={this.props.icon} 
             onMouseEnter={this.tooltipshow.bind(null, this.props.ID_Tip)} 
             onMouseLeave={this.tooltiphide.bind(null, this.props.ID_Tip)} />
             </ButtonMUI>
             {this.props.tooltip &&
                <div id={"extension-toolbar-tooltip-"+this.props.ID_Tip}  className={'extension-toolbar-tooltip'}  >
                    <span>{this.props.tooltip}</span>
                </div>
             }
         </div>   
        )
    }
  }

