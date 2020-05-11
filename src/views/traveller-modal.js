import React, { Component } from 'react'
import { Button, Header, Image, Modal, Table, Transition } from 'semantic-ui-react'
import ModalRow from './model-row';
var uuid4 = require('uuid4');

const tasks = [
    {
        id: uuid4(),
        adultCount: 0,
        childCount: 0,
    }
];

class TravellerModal extends Component {
    state = { items: tasks }

    handleAdd = () => {
        let tmpList = this.state.items;
        tmpList.push(tasks);
        this.setState({
            items: tmpList
        });
    }

    handleChange = (i, attribute, value) => {
        let tmpTravellerList = this.state.items;
        let objIndex = tmpTravellerList.findIndex((obj => obj.id == i));
        tmpTravellerList[objIndex][attribute] = value;
        this.setState({
            items: tmpTravellerList
        });
        console.log(tmpTravellerList);
    }

    handleRemove = () => this.setState({ items: this.state.items.slice(0, -1) })

    render() {
        let { items } = this.state;

        return (
            <Modal trigger={<Button secondary size="tiny">Add Traveller info</Button>} size="tiny">
                <Modal.Header>Add Traveller's informations</Modal.Header>
                <Modal.Content>
                    <div>
                        <Button.Group>
                            <Button disabled={items.length === 0} icon='minus' onClick={this.handleRemove} label='Remove Room' />
                            <Button icon='plus' onClick={this.handleAdd} label='Add Room' />
                        </Button.Group>
                        <Table unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Adult Count(Age above 15)</Table.HeaderCell>
                                    <Table.HeaderCell>Child Count</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Transition.Group
                                as={Table.Body}
                            // duration={500}
                            >
                                {items.map(item => (
                                    <ModalRow item={item}
                                        handleChange={this.handleChange}
                                    />
                                ))}
                            </Transition.Group>
                        </Table>
                    </div>
                    <Button type='submit' primary onClick={
                        (e) => {
                            this.props.setTravellerList(items);
                        }
                    }>Done</Button>
                </Modal.Content>
            </Modal>
        );
    }
}

export default TravellerModal;