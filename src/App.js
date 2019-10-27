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
		settingsVisible: false,
    theme: null,
    greetingMessage: null,
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
      //Get time to set the theme
      let today = new Date();
      // I'll leave this here for now, not really needed for this. May be needed in the future.
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let timeOfDay = today.getHours();
      let dateTime = date+' '+timeOfDay;
      let theme = null;
      let greetingMessage = null
      if(timeOfDay >= 0 && timeOfDay < 12){
          theme = ["#6f0979", "#ffebbd"]
          greetingMessage = "Good Morning, anything you want to tell me?"
      }else if(timeOfDay >= 12 && timeOfDay < 16){
          theme = ["#425891", "#acd9da"]
         greetingMessage = "Good Day! How's it going?"
      }else if(timeOfDay >= 16 && timeOfDay < 21){
          theme = ["#872458", "#f78300"]
          greetingMessage = "Good Afternoon - let's talk about it!"
      }else if(timeOfDay >= 21 && timeOfDay < 24){
         theme = ["#151416", "#564379"]
         greetingMessage = "Good Evening, anything you want to tell me?"
      }
      this.setState({
        theme:{
          height: "100vh",
          backgroundImage: "linear-gradient("+theme[0]+","+theme[1]+")",
          overflow: "hidden",
        }
      })
      this.setState({greetingMessage:greetingMessage})

      firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                  this.setState({user: user})

              } else {
                  this.setState({ user: null })
              }
          })
    }

  render(){

		return (
			<div>
				{this.state.user && !this.state.settingsVisible && <Home theme={this.state.theme} greetingMessage={this.state.greetingMessage}/>}
				{!this.state.user && !this.state.settingsVisible && <Login actions={this.actions}/>}
				{this.state.settingsVisible && <Settings/>}
			</div>
		)
  }
}

export default App;