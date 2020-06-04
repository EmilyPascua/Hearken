const updateUser = user => {
    return {
        type: 'UPDATE_USER',
        user
    }
}

const login = () => {
    return {
        type: 'LOGIN'
    }
}

const signout = () => {
    return {
        type: 'SIGNOUT'
    }
}

const postStory = (story) => {
    return {
        type: 'POST_STORY',
        story
    }
}

const updateTheme = (theme) => {
    return {
        type: 'UPDATE_THEM',
        theme
    }
}

const updateGreeting = (greeting) => {
    return {
        type: 'UPDATE_GREETING',
        greeting
    }
}

export {
    updateUser,
    login,
    signout,
    postStory,
    updateTheme,
    updateGreeting
}