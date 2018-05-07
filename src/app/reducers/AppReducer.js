import actions from '../actions';

const appReducer = (state = { appName: "React Base App" }, action) => {

    switch (action.type) {
        case actions.INIT_APP:
            return action.payload;
    }

    return state;
};

export default appReducer;
