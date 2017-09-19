import {increaseCount, reducer, store} from './counter'

describe('Counter', function() {
  it('should have a default state', function () {
    const result = reducer();
    expect(result.count).toEqual(0);
  });


  it('should increase the count with a custom count value', function () {
    const action = increaseCount(5);
    const result = reducer(undefined, action);
    expect(result.count).toEqual(5);
  });

});


describe('Sheep coutng store', function() {

  it('should return the state', function() {
    const state = store.getState();
    expect(state.count).toEqual(0);
  });

  it('should dispatch actions and update the state', function() {
    const state = store.getState();
    expect(state.count).toEqual(0);
  });


})