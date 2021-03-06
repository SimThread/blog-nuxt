import { SUCCESS_GET_SNSLOGINS, FAILURE_GET_SNSLOGINS } from '../types';
import service from '@/services/index';

const state = { items: [] };

export const getSnsLogins = () => {};
const actions = {
    getSnsLogins ({ commit }) {
        service.getSnsLogins().then(
            (response) => {
                if (response.statusText !== 'OK') {
                    return commit(FAILURE_GET_SNSLOGINS);
                }
                commit(SUCCESS_GET_SNSLOGINS, response.data.data);
            },
            () => {
                commit(FAILURE_GET_SNSLOGINS);
            }
        );
    }
};

const mutations = {
    [FAILURE_GET_SNSLOGINS] (state) {
        state.items = [];
    },
    [SUCCESS_GET_SNSLOGINS] (state, data) {
        state.items = data;
    }
};

export default {
    state,
    actions,
    mutations
};
