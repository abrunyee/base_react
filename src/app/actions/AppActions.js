export const INIT_APP = "INIT_APP";

export function initApp(appName) {
    return async dispatch => {
        dispatch({ type: INIT_APP, payload: { appName} });
    };
}
