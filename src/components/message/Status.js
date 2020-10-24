 import React ,{Component} from 'react';
 import {withStyles} from '@material-ui/core/styles';
 import Done from '@material-ui/icons/Done'
 import DoneAll from '@material-ui/icons/DoneAll';

 const styles = {
     icon:{
         margin:0,
         fontSize:14
     }
 }

 class MessageStatus extends Component{
     render(){
         const {message,classes} = this.props;
         if(message.isReadByAll){
             return (
                 <div className="checkMark">
                     <DoneAll className={classes.icon} />
                 </div>
             )
         }

         return (
             <div className="checkMark">
                 <Done className={classes.icon} />
             </div>
         )
     }
 }
 export default withStyles(styles)(MessageStatus);