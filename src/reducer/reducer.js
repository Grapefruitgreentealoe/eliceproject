const initialState = {
    name: "",
    sex: "", // 'M' | 'F'
    todos: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TEST_ACTION":
            {
                return { name: "TRIGGERED", sex: "M" };
            }

            // case SAVE_TODOS:
            //     {
            //         return {
            //             ...state,
            //             todos: action.payload.todos,
            //         };
            //     }

        default:
            return state;
    }
};

export default reducer;