//this will flip fetchingUsers state to true and can then display a loading message
export function fetchUsersRecent(){
    return {
        type: "FETCH_USERS_RECENT"
    }
}
//this will flip fetchingUsers state to true and can then display a loading message
export function fetchUsersAllTime(){
    return {
        type:"FETCH_USERS_ALL_TIME"
    }
}
//this willl flip fetchingAllTime or fetchingRecent to false and can display data table
export function fetchComplete(fetchType, data){
    return {
        type: "FETCH_COMPLETE",
        fetchType,
        payload: data
    }
}
//this will catch errors associated with fetching and display
export function reportFetchError(){
    return {
        type: "FETCH_ERROR"
    }
}