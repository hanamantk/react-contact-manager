/*
  @Author       : hanamant k
  Maincomponent : MyContainer and child components
  Description   : wraps contact and header components
*/

import React, { Component}    from 'react';
import {connect}              from 'react-redux';
import {bindActionCreators}   from 'redux';
import * as actions           from '../actions/index';
import {Link}                 from 'react-router';



export class MyContainer extends Component {

  constructor(props) {
    super(props);

    this.handleDelete=this.handleDelete.bind(this);
  }

    componentWillMount(){

    this.props.actions.getData('profiles');

    }

  handleDelete(e,id){

   e.preventDefault();
   let delete_id=e.target.id;
   this.props.actions.deleteContact(delete_id);

  }


  render() {
       
        let {data}=this.props;

        var profiles=data.map((profile,index)=>{
            return <Contact profile     ={profile} 
                            id          ={profile.id} 
                            handleDelete={this.handleDelete}
                            index       ={index+1} />;
        })
        
      return (
              <div>
                 <Header/>
                 <div className="list" >List of contacts</div>
                 <Link  className="ct-button"  style={{textDecoration:'none'}} to={{ pathname: '/AddContact',query:{}}}>
                      Add contact
                 </Link>
                 <div className="row">
                    {profiles}
                 </div>
              </div>      
    );
  }
};


class Contact extends Component {

  constructor(props) {
    super(props);

  }
  render() {
            
            let {id,name,tel,email}=this.props.profile;
          let index=(this.props.index%3===0)?'myrow':'';
      return (
          
            <div className="col-sm-4">
               <div className="media">
                  <div className="media-left col-sm-5 ">
                     <img src={require('../img/'+this.props.id+'.jpg')}  alt="profile pic" />
                  </div>
                  
                  <div className="media-body col-sm-6 ">
                     <h4 className="media-heading name">{name}</h4>
                     <Link  to={{ pathname: '/UpdateContact',query:{id:id}}}>edit--</Link>
                     <a href="#"   id={id} onClick={this.props.handleDelete.bind(id)}>delete</a>
                     <label for="email">phone Number:</label>
                     <div className="span4">{tel}</div>
                     <label for="email">Email:</label>
                     <div className="span4">{email}</div>
                  </div>

               </div>
               <div className={index}></div>
            </div>      

    );
  }
}


export class Header extends Component {
  
  constructor(props) {
    super(props);
  }


  render() {

      return (  
            <div className="header">
                <h2>Contact Managar</h2>
                <h4>Simple React application Example</h4>
              </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
