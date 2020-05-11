import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const TopAreaComponent = () => {
    return (
        <section class="top-area">
            <div class="header-area">
                <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                    <div class="container">

                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i class="fa fa-bars"></i>
                            </button>
                            <a class="navbar-brand" href="index.html">Hotel<span>Lodge</span></a>

                        </div>
                        <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li class=" scroll active"><a href="#home">home</a></li>
                                <li class="scroll"><a href="#explore">Our Hotels</a></li>
                                <li class="scroll"><a href="#reviews">review</a></li>
                                <li class="scroll"><a href="#signup">
                                    <Button color='facebook' basic primary style={{
                                        fontSize:"12px"
                                    }}> Sign up
                                    </Button>
                                </a></li>
                                <li class="scroll"><a href="#signin">
                                    <Button color='twitter'basic positive style={{
                                        fontSize:"12px"
                                    }}> Sign in
                                    </Button>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            <div class="clearfix"></div>

        </section>
    );
}

export default TopAreaComponent;