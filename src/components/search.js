import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight : theme.spacing(2),
    marginLeft : 0,
    width : '100%',
    [theme.breakpoints.up('sm')] : {
      marginLeft : theme.spacing(3),
      width : 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding : theme.spacing(0, 2),
    margin : '10px',
    marginLeft : '-5px',
    height : '50%',
    position : 'absolute',
    pointerEvents : 'none',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    color : '#5F6368',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({

    color : '#5F6368',
    '& .MuiInputBase-input' : {
      padding : theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft : `calc(1em + ${theme.spacing(4)})`,
      transition : theme.transitions.create('width'),
      width : '100%',
      [theme.breakpoints.up('md')] : {
        width : '20ch',
      },
    },
}));
export default class PopupSearch extends React.Component {
    render() {
        return(
            <center>
                <Search style={{
                    borderRadius:'3px',
                    marginTop:'30px',
                    backgroundColor:'#fff',
                    width: '260px',
                    marginLeft: '20px',
                }}>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search collection"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </center>  
        )
    }
}