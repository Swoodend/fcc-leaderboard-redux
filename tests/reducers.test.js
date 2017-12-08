import { userData as reducer } from '../src/reducers/reducers';

describe("the userData reducer", () => {
    let initialState = {
        fetchingData: false,
        fetchError: false,
        recent: [],
        allTime: [],
        selectedDataSort: 'recent'
    };
    it("should return the default state when no action.type is matched", () => {

        let expected = initialState;
        expect(reducer(initialState, {})).toEqual(expected);
   });

   it("should return the correct state given a FETCHING_DATA action", () => {
        let expected = Object.assign({}, initialState, {
            fetchingData: true
        });
        expect(reducer(initialState, {type: "FETCHING_DATA", payload: true})).toEqual(expected);
   });

   it("should return the correct state given a SET_DATA action", () => {
       let expectRecent = Object.assign({}, initialState, {
           recent: [{foo: "bar"}]
       });

       let expectAllTime = Object.assign({}, initialState, {
           allTime: [{bar: "baz"}]
       });

       expect(
           reducer(initialState, {type:"SET_DATA", fetchType: "recent", payload: [{foo: "bar"}]})
        ).toEqual(expectRecent);

        expect(
            reducer(initialState, {type:"SET_DATA", fetchType: "allTime", payload: [{bar: "baz"}]})
        ).toEqual(expectAllTime);

   });

   it("should return the correct state given a FETCH_ERROR action" , () => {
        let expected = Object.assign({}, initialState, {
            fetchError: "error!"
        });
        expect(reducer(initialState, {type: "FETCH_ERROR", payload: "error!"})).toEqual(expected);
   });

   it("should return the correct state give a SORT_RECENT action", () => {
        let expected = Object.assign({}, initialState, {
            selectedDataSort: 'recent'
        });
        expect(reducer(initialState, {type:"SORT_RECENT"})).toEqual(expected);
   })
    
    it("should return the correct state give a SORT_ALL_TIME action", () => {
        let expected = Object.assign({}, initialState, {
            selectedDataSort: 'allTime'
        });
        expect(reducer(initialState, {type: "SORT_ALL_TIME"})).toEqual(expected);
    })
});