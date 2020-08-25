export const login = () => {
    return (dispatch,getState,{ getFirebase,getFirestore }) => {
        const firebase = getFirebase();

        firebase.login({
            provider: 'google',
            type: 'popup',
        })
        .then(() => {
            console.log('successful');
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export const logout = () => {
    return (dispatch,getState,{ getFirebase,getFirestore }) => {
        const firebase = getFirebase();

        firebase.logout()
        .then(() => {
            console.log('successful');
        })
        .catch(err => {
            console.log(err);
        });
    }
}