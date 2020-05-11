import React, { Component } from 'react';
import { Button, Checkbox, Icon, Grid, Popup, Table, Transition, Input } from 'semantic-ui-react';

export default class ModalRow extends Component {
    render() {
        let { item,
            handleChange 
        } = this.props;

        return (
            <Table.Row key={item.id}>
                <Table.Cell>
                    <Input type="number"
                        onChange={
                            (e) => handleChange(item.id, "adultCount", e.target.value)
                        }
                    />
                </Table.Cell>
                <Table.Cell>
                    <Input type="number"
                        onChange={
                            (e) => handleChange(item.id, "childCount", e.target.value)
                        }
                    />
                </Table.Cell>
            </Table.Row>
        );
    }
}