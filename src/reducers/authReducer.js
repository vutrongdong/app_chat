import * as authConst from 'constants/auth'

const initialState = {
    user: []
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConst.LOGIN:
            console.log(action.payload)
            // const { user: {data} } = action.payload;
            return {
                ...state,
                user: []
            };
        default:
            return state;
    }
};

export default authReducer;