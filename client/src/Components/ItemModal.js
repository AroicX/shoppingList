import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../actions/itemActions';

class ItemModal extends React.Component {
 state = {
	 modal: false,
	 name:  ''
 }

 toggle = () => {
	 this.setState({
		 modal: !this.state.modal
	 });
 }

 onChange = (e) => {
	 	this.setState({ [e.target.name]: e.target.value });
 }

 onSubmit = (e) => {

	e.preventDefault();
	const newItem = {
		name: this.state.name
	}

	// Add item via additem actions
	this.props.addItem(newItem);

	//close Modal
	this.toggle();

 }

	render() {
		return (
			<div className="ItemModal">
				<div>
					<Button color="dark" style={{marginBottom: '2rem'}} onClick={this.toggle}>Add Item</Button>

					<Modal isOpen={this.state.modal} toggle={this.toggle}>
						<ModalHeader toggle={this.toggle}>Add To Shopping List </ModalHeader>
						<ModalBody>
							<Form onSubmit={this.onSubmit}>
								<FormGroup>
									<Label for="item">Item</Label>
										<Input type="text" name="name" id="item" placeholder="Add Shopping Item" onChange={this.onChange} required/>
											<Button color="dark" style={{marginTop: '2rem'}} block>Add Item</Button>
								</FormGroup>
							</Form>
						</ModalBody>
					</Modal>

				</div>
			</div>
		);
	}
}


const mapStateToProps = (state)  => ({
  item: state.item
});

ItemModal.propTypes = {
    addItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
  };

export default connect(mapStateToProps,{ addItem })(ItemModal);
