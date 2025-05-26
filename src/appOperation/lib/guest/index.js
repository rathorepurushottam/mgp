// import {AppOperation} from '../..';

import {GUEST_TYPE} from '../../types';

export default appOperation => ({
  register: data => appOperation.post('user/sendOtp', data, GUEST_TYPE),
  otp_verification: data => appOperation.post('user/signUp', data, GUEST_TYPE),
});
