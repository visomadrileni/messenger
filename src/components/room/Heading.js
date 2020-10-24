 import React,{Component} from 'react';
 import {connect} from 'react-redux';
 import {searchRoom} from '../../actions/room';
 import {withStyles} from '@material-ui/core/styles';
 import Close from '@material-ui/icons/Close'
 import Search from '@material-ui/icons/Search'

  const styles = {
      header: {
          height: 49,
          padding: 6,
          borderBottom: '1px solid rgba(0,0,0,0.1)'
      }
  }

  class Heading extends Component{
      onChangeSearch = e => {
          const {dispatch} = this.props;
          dispatch(searchRoom(e.target.value))
      }

      clearSearch = () => {
        const {dispatch} = this.props;
        dispatch(searchRoom(''))
      }

      onKeyUp = e => {
          if(e.key === 'Escape'){
              this.clearSearch();
          }
      }

      render(){
           const {search,classes} = this.props;

           return (
               <div className={classes.header}>
                   <div className="search">
                       <Search className="searchIcon" />
                       <input type="text" className="searchInput" value={search} onChange={this.onChangeSearch} onKeyUp={this.onKeyUp} placeholder="Search by name" />
                       {search.length > 0 ? (
                           <Close className="clearIcon" onClick={this.clearSearch} />
                       ) : ('')}
                   </div>
               </div>
           )
      }
  }

  const mapStateToProps = state => ({
      search: state.room.search
  })

  export default connect(mapStateToProps)(withStyles(styles)(Heading))