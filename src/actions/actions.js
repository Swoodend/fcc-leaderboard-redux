//this will flip fetchingUsers state to true and can then display a loading message
export function fetchingData(bool){
    return {
        type: "FETCHING_DATA",
        payload: bool
    }
}

//this willl flip fetchingAllTime or fetchingRecent to false and can display data table
function updateUserData(fetchType, data){
    return {
        type: "SET_DATA",
        fetchType,
        payload: data
    }
}
//this will catch errors associated with fetching and display

function fetchRecentData(){
    return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then((res) => {
        return res.json();
    })
    .then((recentData) => {
        return recentData
    })
}

function fetchAllTimeData(){
    return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then((res) => {
        return res.json();
    })
    .then((allTimeData) => {
        return allTimeData;
    })
}

export function reportFetchError(e){
    return {
        type: "FETCH_ERROR",
        payload: e
    }
}

export function sortByRecent(){
    return {
        type: "SORT_RECENT"
    }
}

export function sortByAllTime(){
    return {
        type: "SORT_ALL_TIME"
    }
}

export function getAllData(){

    return (dispatch) => {
        Promise.all([fetchRecentData(), fetchAllTimeData()])
        .then(([recent, allTime]) => {
            dispatch(fetchingData(false));            
            dispatch(updateUserData('recent', recent));
            dispatch(updateUserData('allTime', allTime));
            
        })
        .catch((e) => {
            console.log('error', e);
            dispatch(reportFetchError(e));
        });
    }
}