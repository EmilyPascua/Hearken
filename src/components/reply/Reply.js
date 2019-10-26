import React from 'react'
import { FaCloud } from 'react-icons/fa';

const Reply = (props) => {
	return (
		<div>
			<p className="reply-greeting">Good Morning, How's your day so far?</p>
			<div className="class">
				<div className="test"></div>
				<textarea className="test2" rows="5" cols="50">
					Test
				</textarea>
			</div>
		</div>
	)
}

export default Reply