import {createStore} from "vuex";
export default createStore({
    state: {
        productModal: null,
    },
    mutations: {
        TOGGLE_PRODUCT(state) {
            state.productModal = !state.productModal;
        },
    },
    actions: {},
    modules: {},
});