import React, {Component}from 'react'

import SideDrawer from './SideDrawer';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {

  state = {
    drawerOpen: false,
    headerShow: false
  }


  handleScroll = () => {
    if(window.scrollY > 0){
      this.setState({
        headerShow: true
      })
    }else {
      this.setState({
        headerShow: false
      })
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  toggleDrawer = (value) =>{
    this.setState({
      drawerOpen: value
    })
  }
  render() {
    return (
      <div>
        <AppBar
         position= "fixed"
         style={{
           backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent', 
            boxShadow:'none',
            padding:'10px 0px'}}>
         <ToolBar>
           <div className="header_logo">
            <div className="font-righteous header_logo_venue">MUSICON</div>
            <div className="font-righteous header_logo_title">musical event</div>
           </div>

           <IconButton aria-label="Menu" color='inherit' onClick={()=> this.toggleDrawer(true)}>

             <MenuIcon />
           </IconButton>

           <SideDrawer open = {this.state.drawerOpen}
            onClose={(value)=> this.toggleDrawer(value)}/>
         </ToolBar>

        </AppBar>
      </div>
    )
  }
}


export default Header;