import firebase from 'firebase';
import fire from '../fire';

const db = fire.database()

const initState = {
    firebase: fire,
    database: db,
    user: null,
    stories: [],
    clouds: []
}

const rootReducer = (state = initState,action) => {
    // if (action.type === 'GET_USER') {
        
    // }
    // if (action.type === 'GET_STORIES') {
        
    // }
    // if (action.type === 'GET_CLOUDS') {
        
    // }
    // if (action.type === 'GET_THEME') {
        
    // }
    // if (action.type === 'GET_GREETING') {
        
    // }
    if (action.type === 'LOGIN') {
        const provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider)
            .then((u) => {
                // const token = u.credential.accessToken
                const {displayName,email,emailVerified,photoURL,uid} = u.user
                    ,userObj = {
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        photoURL: photoURL,
                        uid: uid
                    }

                const usersRef = initState.databse.ref('users');
                let exists = false;

                usersRef.once("value", function(data) {
                    for (const dbUser in data.val()) {
                        if (dbUser == uid) {
                            exists = true;
                            return;
                        }
                    }
                });

                if (!exists) {
                    usersRef.update(
                        {
                            [uid]: userObj
                        }
                    );
                    console.log('registered new user');
                }

                return {
                    ...state,
                    user: userObj
                };
            })
            .catch((err) => {
                console.log('Error: ' + err.toString())
                return state;
            });
    }
    if (action.type === 'SIGNOUT') {
        initState.firebase.auth().signOut()
            .then((u) => {
                console.log('user logged off');

                return {
                    ...state,
                    user: null
                }
            })
            .catch((err) => {
                console.log('Error: ' + err.toString())
                return state;
            });
    }
    if (action.type === 'UPDATE_USER') {
        const user = action.user;

        return {
            ...state,
            user
        }
    }
    if (action.type === 'POST_STORY') {
        const story = action.story
            ,storiesRef = initState.database.ref(`stories/`)
            //using firebase's autogenerated key for the ID
            //push creates a new empty entry to the database that can be referenced
            ,newId = storiesRef.push().key
            ,date = new Date()
            ,month = date.getMonth() + 1
            ,time = date.getTime()
            ,createdOn = month + '/' + date.getDate() + '/' + date.getFullYear() + '  @' + time;

        story.id = newId
        story.user = state.user.displayName
        story.created = createdOn

        storiesRef.update({
            [newId]: story
        })
    }
    // if (action.type === 'UPDATE_MATCHED') {
    //     const user = state.user;

    //     user.isMatched = isMatched;

    //     db.ref("users/" + user.user_id).update(user);
    // }
    // if (action.type === 'GET_MATCHED') {
    //     // Hard-coded value of total # of traits possible.
    //     // Used to calculate percentage of match
    //     let totalTraits = 6;

    //     let matchedUser = {};
    //     let percentage = -1;

    //     db.ref("users").once("value").then( snapshot => {
    //         let dbUsers = snapshot.val();

    //         for (let key in dbUsers) {
    //             if (dbUsers.hasOwnProperty(key)) {

    //             if(!(dbUsers[key].isMatched)) {
    //                 continue;
    //             }
                    
    //             let dbTraits = dbUsers[key].traits;
                
    //             userTraits = new Set(userTraits);

    //             let intersection = new Set(dbTraits.filter(trait => userTraits.has(trait)));
                
    //             let tempPercentage = Math.round((intersection.size / totalTraits) * 100);

    //             // If multiple users have the highest percentage, then keep the first.
    //             if(tempPercentage > percentage) {
    //                 percentage = tempPercentage; 
    //                 matchedUser = dbUsers[key];
    //             }
    //             }
    //         }

    //         // matchedUser = {} if no match was found
    //         this.setState({
    //             matchUser: matchedUser
    //         });
    //     });
    // }
    return state;
}

export default rootReducer;