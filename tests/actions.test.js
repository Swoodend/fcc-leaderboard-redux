import * as actions from '../src/actions/actions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("the fetchingData action cretor", () => {
    it("should return the correct action based on the argument provided", () => {
        let expectedAction = { type: "FETCHING_DATA", payload: true };
        expect(actions.fetchingData(true)).toEqual(expectedAction);
    });
});

describe("the updateUserData action creator", () => {
    it("should return the correct action based on the arguments provided", () => {
        let expectedAction = { type: "SET_DATA", fetchType: "foo", payload: [{bar: "baz"}]};
        expect(actions.updateUserData("foo", [{bar: "baz"}])).toEqual(expectedAction);
    });
});

describe("the reportFetchError action creator", () => {
    it("should return the correct action", () => {
        let expectedAction = { type: "FETCH_ERROR", payload: "ERROR"};
        expect(actions.reportFetchError("ERROR")).toEqual(expectedAction);
    });
});


describe("the sortByRecent action creator", () => {
    it("should return the correct action", () => {
        let expectAction = { type: "SORT_RECENT" };
        expect(actions.sortByRecent()).toEqual(expectAction);
    });
});

describe("the sortByAllTime action creator", () => {
    it("should return the correct action", () => {
        let expectAction = { type: "SORT_ALL_TIME" };
        expect(actions.sortByAllTime()).toEqual(expectAction);     
    });
});

describe("the getAllData action creator", () => {
    let store = mockStore({});  
    let allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    let recentUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";

    it("should dispatch the 3 correct actions", () => {

        fetchMock.get(allTimeUrl, {foo: 'bar'});
        fetchMock.get(recentUrl, {foo: 'baz'});  

        store.dispatch(actions.getAllData()).then(() => {
            expect(store.getActions()).toEqual(
                [
                    { type: "FETCHING_DATA", payload: false },
                    { type: "SET_DATA", fetchType: "recent", payload: { foo: 'baz' } },
                    { type: "SET_DATA", fetchType: 'allTime', payload: { foo: 'bar' } }
                ]
            )
            
        });
    });
});