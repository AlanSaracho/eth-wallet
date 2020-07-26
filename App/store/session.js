import {generateChillout} from 'redux-chillout';

const [SessionActions, reducer, SessionTypes] = generateChillout(
  {
    setUserWallet: (_, action) => ({wallet: action.wallet}),
  },
  {},
);

export {SessionActions, SessionTypes};
export default reducer;
