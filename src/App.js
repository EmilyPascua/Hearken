import React from 'react';
import firebase from 'firebase'
import fire from './fire'
import Home from './components/home/Home.js';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Reply from './components/reply/Reply.js';
import Settings from './components/settings/Settings.js';
import Stories from './components/stories/Stories.js';
import Story from './components/story/Story.js';
import TraitSelect from './components/traitselect/TraitSelect'

import './App.css';

const uuidv1 = require('uuid/v1');
const db = fire.database()

class App extends React.Component {
	state = {
		user: null,
		settingsVisible: false,
        traitSelectVisible: false
    }
  
  actions = {
    setTraits: (traits) => {

        const user = this.state.user

        console.log(user)
        user.details.traits = traits

        fire.database().ref("users/" + user.details.uid).update(user)

        this.setState({traitSelectVisible: false})
        this.actions.getMatch(traits)
    },
    sendReply: (content) => {

      let reply = {
        content: content,
        authorId: this.state.user.details.uid,
        readerId: '',
        isRead: 'no'
      }

      fire.database().ref("users/" + this.state.user.details.uid + "/reply").set(reply);
    },
    postStory: (content) => {
      let story = {
        content: content,
        authorId: this.state.user.details.uid,
        responderId: '',
        hasReply: 'no'
      }

      fire.database().ref("users/" + this.state.user.details.uid + "/story").set(story);
    },
    // Updates user's status if matched or no longer matched
    updateIsMatched: (user, isMatched) => {
        user.details.isMatched = isMatched;

        fire.database().ref("users/" + user.uid).update(user);
    },
    insertUser: (user,uid) => {
        fire.database().ref("users").once('value', (snapshot) => {
            if (snapshot.hasChild(uid)) {
                const userNode = snapshot.child(uid).exportVal()
                this.setState({user: userNode})

                if (this.state.user.details.traits) {
                    this.setState({traitSelectVisible: false})
                }
                else {
                    this.setState({traitSelectVisible: true})
                }
            }
            else {
                fire.database().ref("users/" + user.details.uid).set(user)
                // this.setState({traitSelectVisible: false})
            }
        })
    },
    getMatch: userTraits => {
        // Hard-coded value of total # of traits possible.
        // Used to calculate percentage of match
        const user = this.state.user
        let totalTraits = 6;

        let matchedUser = {};
        let percentage = -1;

        fire.database().ref("users").once("value").then( snapshot => {
        
        let dbUsers = snapshot.val();

        for (let key in dbUsers) {
            if (key != this.state.user.details.uid) {

                if(!(dbUsers[key].details.isMatched)) {
                    continue;
                }
                  
                let dbTraits = dbUsers[key].details.traits;

                userTraits = new Set(userTraits);

                let intersection = new Set(dbTraits.filter(trait => userTraits.has(trait)));

                let tempPercentage = Math.round((intersection.size / totalTraits) * 100);

                // If multiple users have the highest percentage, then keep the first.
                if(tempPercentage > percentage) {
                    percentage = tempPercentage; 
                    matchedUser = dbUsers[key];
                }
            }
        }
        if (Object.entries(matchedUser).length == 0 && matchedUser.constructor === Object) {

        }
        else {
            user.details.isMatched = true
            user.match = matchedUser.details
            db.ref('users/' + this.state.user.details.uid + '/match').set(matchedUser.details)
        }

      });
    },
    loginGoogle: () => {
		const provider = new firebase.auth.GoogleAuthProvider()

		firebase.auth().signInWithPopup(provider)
            .then((u) => {
            	const token = u.credential.accessToken
            	const user = u.user

                const userObject = {
                    details: {
                        uid: user.uid,
                        displayName: user.displayName,
                        email: user.email,
                        isMatched: false
                    }
                }
                this.setState({user: userObject})

                this.actions.insertUser(userObject,user.uid)
            })
            .catch((err) => {
                console.log('Error: ' + err.toString())
            })
	},
	signout: () => {
        firebase.auth().signOut()
            .then((u) => {
                this.setState({user: null})
            })
            .catch((err) => {console.log('Error: ' + err.toString())})
        }
    }	

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const usersRef = fire.database().ref("users")

                usersRef.once('value', (snapshot) => {
                    if (snapshot.hasChild(user.uid)) {
                        const userNode = snapshot.child(user.uid).exportVal()

                        this.setState({user: userNode})

                        if (this.state.user.details.traits) {
                            this.setState({traitSelectVisible: false})
                        }
                        else {
                            this.setState({traitSelectVisible: true})
                        }
                    }
                })
                if (this.state.user) {
                    fire.database().ref('users').on('value',(snapshot) => {
                    if (this.state.user.details.traits) {
                            this.actions.getMatch(this.state.user.details.traits)
                        }
                    })
                }
            }
        })
    }

    render(){
		return (
			<div>
                {this.state.traitSelectVisible && this.state.user && <TraitSelect actions={this.actions}/>}
				{this.state.user && <Home/>}
				{!this.state.traitSelectVisible && !this.state.user && <Login actions={this.actions}/>}
			</div>
		)
    }
}

export default App;