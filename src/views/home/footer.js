import React from 'react';

const FooterComponent = () => {
    return (
        <footer id="footer"  class="footer">
			<div class="container">
				<div class="footer-menu">
		           	<div class="row">
			           	<div class="col-sm-3">
			           		 <div class="navbar-header">
				                <a class="navbar-brand" href="index.html">Hotel<span>Lodge</span></a>
				            </div>
			           	</div>
			           	<div class="col-sm-9">
			           		<ul class="footer-menu-item">
			                    <li class="scroll"><a href="#explore">Our Hotels</a></li>
			                    <li class="scroll"><a href="#reviews">review</a></li>
			                </ul>
			           	</div>
		           </div>
				</div>
				<div class="hm-footer-copyright">
					<div class="row">
						<div class="col-sm-5">
							<p>
								&copy;copyright. designed and developed by <a href="https://github.com/dilanSuraj">Dilan Suraj Amarasinghe</a>
							</p>
						</div>
						<div class="col-sm-7">
							<div class="footer-social">
								<span><i class="fa fa-phone"> +94 77 3732257</i></span>
								<a href="https://www.facebook.com/dilan.amarasinghe.169/"><i class="fa fa-facebook"></i></a>	
								<a href="https://twitter.com/dilan96297450"><i class="fa fa-twitter"></i></a>
								<a href="https://www.linkedin.com/in/dilansuraj/"><i class="fa fa-linkedin"></i></a>
								<a href="https://github.com/dilanSuraj"><i class="fa fa-github"></i></a>
							</div>
						</div>
					</div>
					
				</div>
			</div>

			<div id="scroll-Top">
				<div class="return-to-top">
					<i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div>
				
			</div>
			
        </footer>
    );
}

export default FooterComponent;