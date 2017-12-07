const initialState = {
    fetchingData: false,
    fetchError: false,
    recent: [],
    allTime: [],
    selectedDataSort: 'recent'
}

export function userData(state = initialState, action){
    switch(action.type){
        case "FETCHING_DATA":
            return Object.assign({}, state, {
                fetchingData: action.payload
            });


        case "SET_DATA":
            if ( action.fetchType === "recent"){
                return Object.assign({}, state, {
                    recent: action.payload
                });
            } else if ( action.fetchType = "allTime"){
                return Object.assign({}, state, {
                    allTime: action.payload
                });
            }
        case "FETCH_ERROR":
            return Object.assign({}, state, {
                fetchError: action.payload
            });

        case "SORT_RECENT":{
            return Object.assign({}, state, {
                selectedDataSort: "recent"
            })

        }

        case "SORT_ALL_TIME":{
            return Object.assign({}, state, {
                selectedDataSort: "allTime"
            })

        }
            
        default:
            return state;

    }
}