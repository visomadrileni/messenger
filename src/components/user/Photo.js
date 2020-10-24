 import React,{Component} from 'react';
 import Avatar from '@material-ui/core/Avatar';
 import {withStyles} from '@material-ui/core/styles';
 import OnlineStatus from './OnlineStatus';

 const styles = ({
    profilePhoto: {
      position: 'relative',
    },
    avatar: {
      margin: 0,
      width: 60,
      height: 60,
    },
  });

 class Photo extends Component{
    render(){
        const {user,classes} = this.props;

        return(
            <div className={classes.profilePhoto}>
                <Avatar src={user.photo} className={`avatar ${classes.avatar}`} />
                <OnlineStatus user={user} />
            </div>
        )
    }
 }

 export default withStyles(styles)(Photo);