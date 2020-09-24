import React, { Component } from 'react';
class Portfolio extends Component {
	render() {
		return (
			<div>
				<h3>My Projects</h3>
				<div className='container'>
					<div className='project'>
						<a
							href='http://angelat623.github.io/flash-card-memory-game/'
							target='blank'>
							<img
								src={require('./images/Memory.png')}
								alt='Memory Card App'
							/>
						</a>
						<p className='desc'>
							This app is called Remembering the good times 2020 COVID edition.
							2020 has been a hard year for everyone. This game app is for
							players who want to strengthen their minds online. This is a
							single-player game that gives you excitement and suspense with
							every flip. Play as much as your heart desires and we'll keep
							score. As the player, you will have the option to play again or
							start a new game it if gets too difficult. The upgrades to come
							will add a multiplayer or play against the computer and levels
							easy, medium, hard. Stay strong beautiful world!.
						</p>
					</div>
					<div className='project'>
						<a href='http://weatherapp623.herokuapp.com/' target='blank'>
							<img src={require('./images/Weather.png')} alt='Weather App' />
						</a>
						<p className='desc'>
							This app is a real-time weather data app. You can search by city
							to see the most up to date weather info.
						</p>
					</div>
					<div className='project'>
						<a href='https://lil-bit-salty.herokuapp.com/' target='blank'>
							<img src={require('./images/Salty.png')} alt='A-lil-bit-Salty' />
						</a>
						<p className='desc'>
							The app is called A-lil-Bit-Salty. It is a picture based food app
							for people with a unique TASTE of humor. The app allows users to
							submit comments under not-so-attractive foods. Users can select
							specific pictures they want to comment under. The kicker is, users
							can update, or even delete anyone's comments. It is a community of
							satire commenting on disgusting images of "delicious" meals. In
							the future, we would like to add a feature that allows user's
							contents as well as user authentication, a feature that would only
							allow a specific user to edit, or delete their own comment.
						</p>
					</div>
					<div className='project'>
						<a
							href='http://city-search-angelat623.herokuapp.com/'
							target='blank'>
							<img
								src={require('./images/CitySearch.png')}
								alt='City Search App'
							/>
						</a>
						<p className='desc'>
							This app is called City Search. With this you can search many
							cities around the world and compare population, info about the city and prices differences.
						</p>
						<a
							href='https://medium.com/@angela.taylor87/building-a-city-search-app-with-react-js-bootstrap-and-axios-dee5f69457c1'
							target='blank'>
                        </a>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
