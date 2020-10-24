 import React,{Component} from 'react';
 import {withRouter} from 'react-router-dom';
 import Avatar from '@material-ui/core/Avatar';
 import {withStyles} from '@material-ui/core/styles';
 import OnlineStatus from './OnlineStatus';

 const styles = ({
    profilePhoto: {
      position: 'relative',
    },
    avatar: {
      margin: 0,
      width: 35,
      height: 35,
    }
  });

 class PhotoSmall extends Component{
     viewProfile = ({user}) => {
         window.open(`/profile/${user.id}`,'_blank')
     }

     render(){
         const {user,classes} = this.props;

         return (
             <div className={classes.profilePhoto}> 
                <Avatar src={user.photo} className={`user ${classes.avatar}`} onClick={this.viewProfile} />
                <OnlineStatus user={user} small />
             </div>
         )
     }
 }

 export default withStyles(styles)(withRouter(PhotoSmall));