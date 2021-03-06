import { showMsg, getCaptchaUrl } from '../actions';
import {
    LOGIN_SUCCESS,
    USERINFO_SUCCESS,
    USERINFO_FAILURE,
    LOGOUT_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_TOKEN
} from '../types';
import { getCookie, saveCookie, signOut } from '../../utils/authService';
import service from '@/services/index';

const state = {
    token: getCookie('token') || null,
    user: null
};

const actions = {
    logout ({ commit }) {
        signOut();
        commit(LOGOUT_USER);
        window.location.pathname = '/';
    },
    localLogin (store, userInfo) {
        service.localLogin(userInfo).then(
            (response) => {
                if (response.statusText !== 'OK') {
                    getCaptchaUrl(store);
                    return showMsg(store, response.data.error_msg || '登录失败');
                }
                const token = response.data.token;
                saveCookie('token', token);
                store.dispatch('getUserInfo');
                store.commit(LOGIN_SUCCESS, { token });
                showMsg(store, '登录成功,欢迎光临!', 'success');
                this.$router.push({ path: '/' });
            },
            (response) => {
                getCaptchaUrl(store);
                showMsg(store, response.data.error_msg || '登录失败');
            }
        );
    },
    getUserInfo ({ commit }) {
        service.getMe().then(
            (response) => {
                if (response.statusText !== 'OK') {
                    return commit(USERINFO_FAILURE);
                }
                commit(USERINFO_SUCCESS, { user: response.data });
            },
            () => {
                commit(USERINFO_FAILURE);
            }
        );
    },
    updateUser (store, userInfo) {
        service.mdUser(userInfo).then(
            (response) => {
                if (response.statusText !== 'OK') {
                    return showMsg(store, '更新用户资料失败!');
                }
                store.commit(UPDATE_USER_SUCCESS, { user: response.data.data });
                showMsg(store, '更新资料成功!', 'success');
            },
            () => {
                showMsg(store, '更新用户资料失败!');
            }
        );
    }
};

const mutations = {
    [LOGIN_SUCCESS] (state, action) {
        state.token = action.token;
    },
    [USERINFO_SUCCESS] (state, action) {
        state.user = action.user;
    },
    [USERINFO_FAILURE] (state) {
        state.user = null;
    },
    [LOGOUT_USER] (state) {
        state.token = getCookie('token') || null;
        state.user = null;
        state.token = null;
    },
    [UPDATE_USER_SUCCESS] (state, action) {
        state.user = action.user;
    },
    [UPDATE_TOKEN] (state, action) {
        state.token = action.token;
    }
};

export default {
    state,
    actions,
    mutations
};
