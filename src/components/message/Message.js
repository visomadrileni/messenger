 import React,{Component} from 'react';
 import {connect} from 'react-redux';
 import axios from 'axios';
 import Moment from 'react-moment';
 import {withStyles} from '@material-ui/core/styles';
 import Avatar from '@material-ui/core/Avatar/Avatar'
 import MessageStatus from './Status';
 import {calendar} from '../../utils/calendarDate';


 const styles = ({
     icon: {
         margin: 0,
         fontSize: 14
         },
     avatar: {
         height: 35,
         width: 35,
         margin:0
     }    
 })

 class Message extends Component {
     componentDidMount = () => {
         const {message} = this.props;
         readMessage(message)
     }

     render(){
         const {message,classes,selected} = this.props;

         if(message.isFirst){
             return (
                 <div className={`message ${message.classes}`}>
                      <Avatar src={selected.photo} className={`user ${classes.avatar}`} />
                      <div className="details">
                          <div className="text">{message.text}</div>
                          <div className="status">
                             <Moment calendar={calendarStringsMessage} date={message.timestamp} />
                             <MessageStatus message={message} />
                          </div>
                     </div>
                 </div>            
             )
         }

         return (
            <div className={`message __noAvatar ${message.classes}`}>
            <div className="details">
                <div className="text">{message.text}</div>
                <div className="status">
                   <Moment calendar={calendarStringsMessage} date={message.timestamp} />
                   <MessageStatus message={message} />
                </div>
           </div>
       </div>  
         )
     }
 }

 const mapStateToProps = state => ({
     selected: state.room.selected
 })

 export default connect(mapStateToProps)(withStyles(styles)(Message))