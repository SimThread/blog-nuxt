import Vue from 'vue';
import VeeValidate, {
    Validator
} from 'vee-validate';

Validator.extend('nickname', {
    getMessage: _field => '请输入正确的呢称(2-15字符，中英文、数字和下划线)',
    validate: value => /^[(\u4E00-\u9FA5)0-9a-zA-Z_\s@]+$/.test(value)
});

const config = {
    errorBagName: 'errors', // change if property conflicts.
    fieldsBagName: 'fields',
    delay: 0,
    locale: 'en',
    dictionary: null,
    strict: true,
    enableAutoClasses: true,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'ng-valid', // model is valid
        invalid: 'ng-invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'ng-dirty' // control has been interacted with
    },
    events: 'input|blur',
    inject: true
};
Vue.use(VeeValidate, config);
