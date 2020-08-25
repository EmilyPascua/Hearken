import React,{ useEffect } from 'react'
import Story from '../Story';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { logout } from '../../flux/actions/authActions';
import { updateTheme } from '../../flux/actions/homeActions';
import { FaCircle,FaCloud,FaSignOutAlt} from 'react-icons/fa';
import { isEmpty } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const Home = ({ home,handleLogout,updateTheme,auth }) => {
	useEffect(() => {
		updateTheme();
		setInterval(() => {
			updateTheme();
		}, 300000);
	},[updateTheme]);

	if (isEmpty(auth)) return <Redirect to='/Login'/>

	//TODO: The reply,stories, and story should be here
	// Set by a condition in the state
	//<Reply/>
	return (
		<div className={`home ${home.class}`}>
			<div className='home-exit-button-container' onClick={handleLogout}>
				<FaSignOutAlt color='white'/>
			</div>
      <Story message={home.greeting}/>
			<div className="home-sun-container">
				<div className="home-sun"><FaCircle size="45vh"/></div>
			</div> 
			<div className="home-cloud-container">
				<div className="home-cloud-left"><FaCloud size="70vh"/></div>
				<div className="home-cloud-right"><FaCloud size="70vh"/></div>
			</div>
		</div>
	)
}

const enhance = compose(
	connect(
		state => ({
			auth: state.firebase.auth,
			home: state.home,
		}),
		dispatch => ({
			handleLogout: () => dispatch(logout()),
			updateTheme: () => dispatch(updateTheme())
		})
	)
)

export default enhance(Home);