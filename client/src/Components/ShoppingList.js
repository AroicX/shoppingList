import React from 'react';
import{  Container,  Button } from 'reactstrap';
// import{  Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
//import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems,deleteItem } from '../actions/itemActions';


class ShoppingList extends React.Component {

  componentDidMount(){
    this.props.getItems();
  }

  OnDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

	render() {

    const { items } = this.props.item;


		return (
			<div className="ShoppingList">
          <Container>
          <br/>


            {items.map(({ _id, name }) => (
              <div key={_id} className="effect" >
                <p>
                <Button className="remove-btn"
                 color="danger"
                 size="sm"
                 onClick={this.OnDeleteClick.bind(this,_id)}>&times;</Button>
                {name}
                </p>
              </div>
            ))}


          </Container>
      </div>
		);
	}
}

const mapStateToProps = (state)  => ({
  item: state.item
});

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
  };

export default connect(mapStateToProps,{  getItems, deleteItem })(ShoppingList);
