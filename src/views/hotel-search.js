import React, { useState } from 'react'
import { Button, Checkbox, Form, Card, Input, CardHeader, CardContent } from 'semantic-ui-react'
import ReactDatePicker from "react-datepicker"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faChild, faMale, faBed } from '@fortawesome/free-solid-svg-icons'
import TravellerModal from './traveller-modal'
require('react-datepicker/dist/react-datepicker.css')

const HotelSearchForm = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [travellerList, setTravellerList] = useState([]);

    return<>  <Card style={{ padding: '1em' }} raised>
         <CardContent>
            <CardHeader>
                <Button basic positive style={{
                    fontSize: "18px"
                }}> <i class="hotel icon"></i> <span/>Make Reservation
                </Button>
            </CardHeader>
        </CardContent>
        <div class="ui huge form">

            <div class="field">
                <div class="ui labeled input">
                    <div class="ui label">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <ReactDatePicker
                        selected={checkInDate}
                        minDate={new Date()}
                        placeholderText="Select a check in date"
                        onChange={date => setCheckInDate(date)} />
                </div>
            </div>
            <div class="field">
                <div class="ui labeled input">
                    <div class="ui label">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <ReactDatePicker
                        selected={checkOutDate}
                        minDate={new Date()}
                        placeholderText="Select a check out date"
                        onChange={date => setCheckOutDate(date)} />
                </div>
            </div>
            <div class="field">
                <Input icon='child' iconPosition='left' placeholder='Child Count' type="number" />
            </div>
            <div class="field">
                <Input icon='male' iconPosition='left' placeholder='Adult Count' type="number" />
            </div>

            <div class="field">
                <Input icon='bed' iconPosition='left' placeholder='Room Count' type="number" />
            </div>
            <a class="ui red ribbon label">Best</a><span/><Button fluid size="massive" primary>Check Availability</Button>
        </div>
    </Card></>;
}

export default HotelSearchForm;


