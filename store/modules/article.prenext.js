import { PRENEXT_ARTICLE } from '../types';
import service from '@/services/index';

const state = {
    next: {},
    prev: {}
};

const actions = {
    getPrenext ({ commit, rootState }, id) {
        return new Promise((resolve, reject) => {
            return service.getPrenext(id, rootState.options.item).then((response) => {
                if (response.statusText === 'OK') {
                    commit(PRENEXT_ARTICLE, {
                        prenextArticle: response.data.data
                    });
                    return resolve();
                }

                // eslint-disable-next-line prefer-promise-reject-errors
                return reject();
            });
        });
    }
};

const mutations = {
    [PRENEXT_ARTICLE] (state, action) {
        state.prev = action.prenextArticle.prev || {};
        state.next = action.prenextArticle.next || {};
    }
};

export default {
    state,
    actions,
    mutations
};
