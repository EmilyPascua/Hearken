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

import './App.css';

const uuidv1 = require('uuid/v1');
const db = fire.database()

class App extends React.Component {
	state = {
		user: null,
		settingsVisible: false
  }
  
  actions = {

    // replyToStory: () => {

    // }

    postStory: (user, content) => {
      // Generates random/unique ID for story.
      let id = uuidv1();

      let story = {
        id: id, 
        content: content,
        author_id: user.user_id,
        responder_id: '',
        hasReplied: 'no'
      }

      fire.database().ref("stories/" + story.id).set(story);
    },

    // Updates user's status if matched or no longer matched
    updateIsMatched: (user, isMatched) => {
      user.isMatched = isMatched;

      fire.database().ref("users/" + user.user_id).update(user);
    },

    insertUser: user => {
      fire.database().ref("users/" + user.user_id).set(user);
    },

    // TO-DO: Replace hard-coded value of totalTraits
    getMatch: userTraits => {
      // Hard-coded value of total # of traits possible.
      // Used to calculate percentage of match
      let totalTraits = 6;

      let matchedUser = {};
      let percentage = -1;

      fire.database().ref("users").once("value").then( snapshot => {
        
        let dbUsers = snapshot.val();

        for (let key in dbUsers) {
          if (dbUsers.hasOwnProperty(key)) {

            if(!(dbUsers[key].isMatched)) {
              continue;
            }
              
            let dbTraits = dbUsers[key].traits;
            
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

        // matchedUser = {} if no match was found
        this.setState({
          matchUser: matchedUser
        });

      });
    },
    loginGoogle: () => {
			const provider = new firebase.auth.GoogleAuthProvider()

			firebase.auth().signInWithPopup(provider)
                .then((u) => {
                	const token = u.credential.accessToken
                	const user = u.user

                	this.setState({user: user})

                    console.log('Successfully Logged In' + ' ' + user.name);
                })
                .catch((err) => {
                    console.log('Error: ' + err.toString())
                })
		},
		signout: () => {
        firebase.auth().signOut()
          .then((u) => {
              console.log(u.user.name)
              this.setState({user: null})
            }
          )
          .catch((err) => {console.log('Error: ' + err.toString())})
      }	
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                  this.setState({user: user})

              } else {
                  this.setState({ user: null })
              }
          })
    }

  render(){
    // let user = {
    //   "username": "test",
    //   "user_id": "1414",
    //   traits: ["sportsy"],
    //   isMatched: "false"
    // }

    // let content = "I just need to like, rant right now."

    // this.actions.postStory(user, content);
    // let user = {
    //   "username": "test",
    //   "user_id": "1414",
    //   traits: ["sportsy"],
    //   isMatched: "false"
    // }

    // this.actions.updateIsMatched(user, true);

    

    // this.actions.insertUser(user);

		return (
			<div>
				{this.state.user && !this.state.settingsVisible && <Home/>}
				{!this.state.user && !this.state.settingsVisible && <Login actions={this.actions}/>}
				{this.state.settingsVisible && <Settings/>}
			</div>
		)
  }
}

export default App;