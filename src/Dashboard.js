import React, { Component } from 'react';
import Item from './Item';
import {connect} from 'react-redux';
import {clickSignIn} from './action';
import './Dashboard.css';

const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (items) => dispatch(clickSignIn(items))
    }
}
const mapStateToProps = (state) => {
	console.log('$$$$$$$$$$$', state);
  return{
      items: state.biddingSystem.items
  }
}

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
          iname:'',
          idescription:'',
          popupclass:'popupoff',
          dashboard:'dashboardon'
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/api/items')
        .then(res=>res.json())
        .then(json=>this.props.onSignIn(json))
        .catch(err=>console.err(err));
    }

    onNameChange(event) {
        this.setState({
          iname:event.target.value
        });
      }
      onDescriptionChange(event) {
        this.setState({
          idescription:event.target.value
        })
      }

    async addItem() {
        const headers=new Headers();
        headers.append('Content-Type','application/json');
        const options={
          method : 'POST',
          headers,
          body : JSON.stringify({
            "name" : this.state.iname,
            "description" : this.state.idescription
          })
        };
        const request = new Request('http://localhost:3000/api/items',options);
        const response = await fetch(request);
        const status = await response.status;
        this.componentDidMount();
        this.setState({
            popupclass:'popupoff',
            dashboard:'dashboardon'
        });
        console.log(this.state);
      }
      popup(){
          this.setState({
            popupclass:'popupon',
            dashboard:'dashboardoff'
          });
      }

    render(){
        const ItemComponent = this.props.items.length>0 && this.props.items.map((k,i) => {
            return <Item key={i} title={k.name} description={k.description} highestbid={k.highestbidding}/>
        });
        return (
            <div className='dashboardpage'>
                <div class={this.state.popupclass}>
                    <input className='popinputtitle' type="text" placeholder='name' onChange={this.onNameChange.bind(this)}/>
                    <textarea className='popinputdesc' placeholder='description' onChange={this.onDescriptionChange.bind(this)}/>
                    <button class='addbut save' onClick={this.addItem.bind(this)}>save</button>
                </div>
                <div className={this.state.dashboard}>
                    <div class='navbardash'>
                        <h3 className="navhead">BIDDING</h3>
                        <h5 className='navadm'>Admin</h5>
                    </div>
                    <div className='butdiv'>
                        <button className='addbut' onClick={this.popup.bind(this)}>+ add item</button>
                    </div>
                    {ItemComponent}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);