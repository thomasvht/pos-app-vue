import {createStore} from "vuex";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebaseInit';
export default createStore({
    state: {
        productData: [],
        productModal: null,
        productsLoaded: false,
    },
    mutations: {
        TOGGLE_PRODUCT(state) {
            state.productModal = !state.productModal;
        },
        SET_PRODUCT_DATA(state, payload) {
            state.productData.push(payload);
        },
        PRODUCTS_LOADED(state) {
            state.productsLoaded = true;
        }
    },
    actions: {
        async GET_PRODUCTS({ commit, state }) {
            const results = await getDocs(collection(db, "Product"));
            results.forEach((doc) => {
                commit("SET_PRODUCT_DATA", doc.data());
            });
            commit("PRODUCTS_LOADED");
        }
    },
    modules: {},
});