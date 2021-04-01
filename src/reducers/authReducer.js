import * as authConst from 'constants/auth';
import storage from 'storages';

const initialState = {
    user: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConst.LOGIN_SUCCESS:
            const { params: { access, email } } = action.payload;
            const user = {
                email,
                token: access
            };

            storage.save({
                key: 'loginState',
                data: user
            })

            return {
                ...state,
                user
            };
        case authConst.LOGOUT:
            return {
                ...state,
                user: {}
            };
        default:
            return state;
    }
};

export default authReducer;