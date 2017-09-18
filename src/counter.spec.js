import {increaseCount, reducer} from './counter'

describe('Counter', function() {
  if('should have a default state', function () {
    const result = reducer();
    expect(result.count).toEqual(0);
  });

});