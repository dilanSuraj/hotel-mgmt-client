import React from 'react';

const StatistcicsComponent = () => {
    return (
        <section id="statistics"  class="statistics">
			<div class="container">
				<div class="statistics-counter"> 
					<div class="col-md-4 col-sm-6">
						<div class="single-ststistics-box">
							<div class="statistics-content">
								<div class="counter">40</div> <span>k+</span>
							</div>
							<h3>Hotels</h3>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="single-ststistics-box">
							<div class="statistics-content">
								<div class="counter">65</div> <span>k+</span>
							</div>
							<h3>visitors</h3>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="single-ststistics-box">
							<div class="statistics-content">
								<div class="counter">50</div> <span>k+</span>
							</div>
							<h3>happy clients</h3>
						</div>
					</div>
				</div>
			</div>

		</section>
    );
}

export default StatistcicsComponent;