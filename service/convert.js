import { camelCase, snakeCase, isEmpty } from 'lodash';

export const camelizeKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeKeys(v));
  } else if (!isEmpty(obj) && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [key === "x-security-token" || key === "x-user-profile" ? key : camelCase(key)]: camelizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
};

export const snackizeKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(v => snackizeKeys(v));
  } else if (!isEmpty(obj) && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [snakeCase(key)]: key === "meta" ? obj[key] :snackizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
}