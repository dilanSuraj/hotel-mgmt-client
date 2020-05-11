import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import ReactDatePicker from "react-datepicker"
import HotelSearchForm from '../hotel-search';
import { Responsive, Segment } from 'semantic-ui-react';
require('react-datepicker/dist/react-datepicker.css')

const HeroComponent = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    return (
        <section id="home" class="welcome-hero">
            <div class="container">
                <Responsive
                    {...Responsive.onlyMobile}
                >
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "3em" }}>
                        <HotelSearchForm />
                    </div>
                </Responsive>
                <Responsive
                    minWidth={Responsive.onlyTablet.minWidth}
                >
                    <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "3em" }}>
                        <HotelSearchForm />
                    </div>
                </Responsive>
            </div>

        </section>
    );
}

export default HeroComponent;