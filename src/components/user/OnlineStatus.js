 import React,{Component} from 'react';
 import {withStyles} from '@material-ui/core/styles';

 const styles = ({
     default: {
         position: 'absolute',
         height: 10,
         width: 10,
         right: 5,
         bottom: 3,
         borderRadius: '50%'
       },
     small: {
        position: 'absolute',
        height: 8,
        width: 8,
        right: 1,
        bottom: 1,
        borderRadius: '50%',
        background: '#00d235'
     }  
 })

 class OnlineStatus extends Component{
    render(){
        const {user,small,classes} = this.props;

        if(user.online){
            if(small){
                return (<div className={classes.small} />)
            }
        }
        return (<div className={classes.default} />)

        return '';
    }
 }

 OnlineStatus.propTypes = {
    user: object.isRequired,
    small: bool,
    classes: object.isRequired
  };

  OnlineStatus.defaultProps = {
    small: false,
  };
  
  export default withStyles(styles)(OnlineStatus);