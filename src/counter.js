
export const increaseCount = (amount = 1) => ({
  type: 'INCREASE_COUNT',
  payload: amount
});


const DEFAULT_STATE = {
  count: 0
}

export function reducer(state = DEFAULT_STATE, action) {
  return state;
}