import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './traitselect.css'

class TraitSelect extends React.Component {
	state = {
		currentPressed: null,
		traits: []
	}

	clickHandler = (e) => {
		const trait = e.target.value

		const traits = this.state.traits

		if (traits.includes(trait) && trait != undefined) {
			e.target.style.boxShadow = 'none';
			traits.splice(traits.indexOf(trait),1)
		}	
		else if(trait != undefined) {
			e.target.style.boxShadow = '0 6px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
			traits.push(trait)
		}
		this.setState({traits: traits})

		if (this.state.traits.length == 6) {
			this.props.actions.setTraits(this.state.traits)
		}
	}

	render() {
		return (
			<div className='trait-select-container'>
				<div className='button-grid'>
					<div className='button-row'>
						<button type='button' value='adventurist' onClick={this.clickHandler}>
							<i class="em em-bomb" aria-role="presentation" aria-label="BOMB"></i>
							<br></br>
							Adventurist
						</button>
						<button type='button' value='athletic' onClick={this.clickHandler}>
							<i class="em em-soccer" aria-role="presentation" aria-label="SOCCER BALL"></i>
							<br></br>
							Athletic
						</button>
						<button type='button' value='smarty' onClick={this.clickHandler}>
							<i class="em em-brain" aria-role="presentation" aria-label="BRAIN"></i>
							<br></br>
							Smarty
						</button>
					</div>
					<div className='button-row'>
						<button type='button' value='empathetic' onClick={this.clickHandler}>
							<i class="em em-hearts" aria-role="presentation" aria-label="BLACK HEART SUIT"></i>
							<br></br>
							Empathetic
						</button>
						<button type='button' value='extrovert' onClick={this.clickHandler}>
							<i class="em em-zany_face" aria-role="presentation" aria-label="GRINNING FACE WITH ONE LARGE AND ONE SMALL EYE"></i>
							<br></br>
							Extrovert
						</button>
						<button type='button' value='introvert' onClick={this.clickHandler}>
							<i class="em em-zipper_mouth_face" aria-role="presentation" aria-label="ZIPPER-MOUTH FACE"></i>
							<br></br>
							Introvert
						</button>
					</div>
					<div className='button-row'>
						<button type='button' value='tough' onClick={this.clickHandler}>
							<i class="em em-muscle" aria-role="presentation" aria-label="FLEXED BICEPS"></i>
							<br></br>
							Tough
						</button>
						<button type='button' value='friendly' onClick={this.clickHandler}>
							<i class="em em-revolving_hearts" aria-role="presentation" aria-label="REVOLVING HEARTS"></i>
							<br></br>
							Friendly
						</button>
						<button type='button' value='paranoid' onClick={this.clickHandler}>
							<i class="em em-female-detective" aria-role="presentation" aria-label=""></i>
							<br></br>
							Paranoid
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default TraitSelect