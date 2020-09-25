import React, { Component } from 'react';

class ContactMe extends Component {
	render() {
		return (
			<div className='contact'>
				<h3>Check out my links to my sites:</h3>
				<h4>
					<a
						href='https://docs.google.com/document/d/1bWnXWe5fD3TDeHWzGDSPOvsPALYYp1J-Jh1VhsRXtxw/edit#heading=h.ca0awj8022e2'
						target='blank'>
						Resume
					</a>
				</h4>
				<h4>
					<a
						href='https://www.linkedin.com/in/angela-taylor623/'
						target='blank'>
						LinkedIn
					</a>
				</h4>
				<h4>
					<a href='https://github.com/AngelaT623' target='blank'>
						Github
					</a>
				</h4>
				<h3>How you can get a hold of me:</h3>
				<h5>Email: Angela.Taylor.SE@gmail.com</h5>
				<h5>Phone: 702-762-5365</h5>
			</div>
		);
	}
}

export default ContactMe;
