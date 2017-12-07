const initialState = {
    fetchingRecent: false,
    fetchingAllTime: false,
    fetchError: false,
    recent: [],
    allTime: []
}

export function userData(state = initialState, action){
    switch(action.type){
        case "FETCH_USERS_RECENT":
            return Object.assign({}, state, {
                fetchingRecent: true
            });
        case "FETCH_USERS_ALL_TIME":
            return Object.assign({}, state, {
                fetchingAllTime: true
            })

        case "FETCH_COMPLETE":
            if ( action.fetchType === "recent"){
                return Object.assign({}, state, {
                    fetchingRecent: false,
                    recent: action.payload
                });
            } else if ( action.fetchType = "allTime"){
                return Object.assign({}, state, {
                    fetchingAllTime: false,
                    allTime: action.payload
                });
            }
        case "FETCH_ERROR":
            return Object.assign({}, state, {
                fetchError: true
            });
            
        default:
            return state;

    }
}