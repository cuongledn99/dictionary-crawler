import axios from "axios";
import { camelizeKeys, snackizeKeys } from './convert';

export const handerError = (error) => {
    console.log(error)
}

export const CONTENT_TYPE = {
    form: "multipart/form-data",
    json: "application/json"
};

export const getHeaders = (contentType = CONTENT_TYPE.json) => {
    const header = {
        'Content-Type': contentType
    }
    return header;
}

export const request = (endpoint, method, data, config = false) => {
    return new Promise((resolve, reject) => {

        let headers = !config ? getHeaders() : getHeaders(CONTENT_TYPE.form)
        const initHeader = {
            ...headers
        }

         axios({
            method: method,
            url: endpoint,
            headers: initHeader,
            data: snackizeKeys(data)
        }).then(res => { return resolve(camelizeKeys(res)) }).catch(error => {
            return handerError(error)
        })
    })
};