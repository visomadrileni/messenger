 import React ,{Component} from 'react';
 import {connect} from 'react-redux';
 import { withRouter } from "react-router";
 import Moment from 'react-moment';
 import {calendar} from '../../utils/calendarDate';
 import {withStyles} from '@material-ui/core/styles';
 import Menu from '@material-ui/core/Menu';
 import MenuItem from '@material-ui/core/MenuItem';
 import ListItemIcom from '@material-ui/core/ListItemIcon';
 import ListItemText from '@material-ui/core/ListItemText';
 import Tune from '@material-ui/icons/Tune';
 import Help from '@material-ui/icons/Help';
 import Close from '@material-ui/icons/Close';
 import Phone from '@material-ui/icons/Phone';
 import Search from '@material-ui/icons/Search';
 import MoreVert from '@material-ui/icons/MoreVert';
 import ExitToApp from '@material-ui/icons/ExitToApp'
 import IconButton from '@material-ui/icons/IconButton/IconButton';
 import AccountCircle from '@material-ui/icons/AccountCircle'
 import PhotoSmall from '../user/PhotoSmall';
 import {calendar} from '../../utils/calendarDate';


 const styles = {
     icon: {margin:0},
     button: {
         margin: 0,
         padding: 5
        },
     avatar:{
         height: 35,
         width: 35,
         margin:0
     }   
 } 

 class Heading extends Component{
     state = {
         search: '',
         anchorEl: null
     }

     closeMenu = () => { 
         this.setState({ anchorEl: null })
     }

     showMenu = e => {
         this.setState({ anchorEl: e.currentTarget })
     }
     searchMessages = e => this.setState({ search: e.target.value})
     
     editSettings = () => { this.props.history.push('/profile/settings/edit/')} 
     logout = () => { this.props.history.push('/logout') }
     viewHelp = () => { this.props.history.push('/help')}
     clearSearch = () => { this.setState({ search: '' })}
     onKeyUp = e => {
         if(e.key === 'Escape'){ this.clearSearch() }
     }
     viewMyProfile = () => {
         const {me} = this.props;
         window.open(`/profile/${me.id}`,'_blank')
     }

     render(){
          const {search,anchorEl} = this.state;
          const {selected,classes} = this.props;
          if(!selected){ return '';}

          return (
              <div className="Heading">
                  <PhotoSmall user={selected.users[0]} />
                  <div className="name">
                      {selected.name}
                      <p className="activeAt">
                          <Moment calendar={calendar} date={selected.lastMessage.timestamp} />
                      </p>
                  </div>

                  <IconButton id="phone" className={classes.button}><Phone /></IconButton>

                  <div id="textSearch" className="search__dark">
                      <Search className="searchIcon" />
                      <input type="text" className="searchInput" value={search} onChange={this.searchMessages} onKeyUp={this.onKeyUp} placeholder="Search in messages" />
                      {search.length > 0 ? (<Close className="clearIcon" onClick={this.clearSearch} />) : ('')}       
                  </div>

                  <IconButton id="profileInfo" className={classes.button} onClick={this.showMenu} component="span" aria-label="Delete" aria-owns={anchorEl ? 'profileMenu' : undefined} aria-haspopup="true">
                      <MoreVert />
                  </IconButton>
                  <Menu id="profileMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.closeMenu}>
                      <MenuItem onClick={this.viewMyProfile}>
                          <ListItemIcom className={classes.icon}><AccountCircle /></ListItemIcom>
                          <ListItemText classes={{primary: classes.primary}} primary="Profile" />
                      </MenuItem>
                      <MenuItem onClick={this.editSettings}>
                          <ListItemIcom className={classes.icon}><Tune /></ListItemIcom>
                          <ListItemText classes={{primary: classes.primary}} primary="Settings" />
                      </MenuItem>
                      <MenuItem onClick={this.viewHelp}>
                          <ListItemIcom className={classes.icon}><Help /></ListItemIcom>
                          <ListItemText classes={{primary: classes.primary}} primary="Help" />
                      </MenuItem>
                      <MenuItem onClick={this.logout}>
                          <ListItemIcom className={classes.icon}><ExitToApp /></ListItemIcom>
                          <ListItemText classes={{primary: classes.primary}} primary="Sign Out" />
                      </MenuItem>
                  </Menu>
              </div>
          )
     }
 }

 Heading.defaultProps = {
    selected: {
        id: null
    }
 }

 const mapStateToProps = state => ({
     me: state.user.me,
     selected: state.room.selected,
     collection: state.room.collection
 })

 export default connect(mapStateToProps)(withStyles(styles)(withRouter(Heading)));