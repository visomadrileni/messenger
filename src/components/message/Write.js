 import React,{Component} from 'react';
 import {connect} from 'react-redux';
 import axios from 'axios';
 import {editMessage} from '../../actions/message'
 import {Picker} from 'emoji-mart'
 import {withStyles} from '@material-ui/core/styles';
 import Paper from '@material-ui/core/Paper';
 import IconButton from '@material-ui/core/IconButton';
 import ClickAwayListener from '@material-ui/core/ClickAwayListener';
 import Send from '@material-ui/icons/Send';
 import Face from '@material-ui/icons/Face';
 import AttachFile from '@material-ui/icons/AttachFile';

 const styles = theme => ({
     button: { margin: theme.spacing.unit }
 })

 class Write extends Component{
     state = { emojiOpened: false }
     showEmoji = () => this.setState({ emojiOpened: true })
     hideEmoji = () => this.setState({ emojiOpened: false })
     send = () => {
        const {userId,text} = this.props;
        axios.post(`/message/user/${userId}`,text)
     }
     
     editText = e => {
         const {selectedRoom,dispatch} = this.props;
         dispatch(editMessage(selectedRoom.id,e.target.value))
     }

     onChange = e => {
         editText(e.target.value);
     }

     onKeyPress = e => {
         if(e.key === 'Enter'){
             e.preventDefault();
             this.send();
         }
     }

     emojiClick = emoji => {
         const {text} = this.props;
         this.editText(text + emoji.native)
     }


     render(){
          const {emojiOpened} = this.state;
          const {classes,text} = this.props;

          return (
              <div className="messageWrite">
                  <div className="messageContainer">
                      <ClickAwayListener onClickAway={this.hideEmoji}>
                          <div>
                              <IconButton id="buttonEmoji" color="default" className={classes.button} onClick={this.showEmoji} component="span">
                                   <Face />
                              </IconButton>
                              {emojiOpened ? (<Paper id="emojis"><Picker onClick={this.emojiClick}/></Paper>) : null}
                          </div>
                      </ClickAwayListener>

                      <IconButton id="buttonUpload" color="default" className={classes.button} component="span">
                             <AttachFile />
                       </IconButton>
                       <IconButton id="buttonSend" color="default" className={classes.button} onClick={this.send} component="span">
                             <Send />
                       </IconButton>
                       <textarea value={text} onChange={this.onChange} onKeyPress={this.onKeyPress} placeholder="Write a message" />
                  </div>
              </div>
          )
     }
 }

 const mapStateToProps = state => ({
     userId: state.room.selected.users[0].id,
     text: state.message.text,
     selectedRoom: state.room.selected
 })

 export default connect(mapStateToProps)(withStyles(styles)(Write))