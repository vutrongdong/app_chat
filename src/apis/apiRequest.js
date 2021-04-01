import axios from 'axios';
import Config from 'react-native-config';
import storage from 'storages';

const apiRequest = async (url, methodType, data = {}, multipart = false) => {
    // const loginState = await storage.load({
    //     key: 'loginState', 
    //     autoSync: true, 
    //     syncInBackground: true,
    //     syncParams: {
    //         extraFetchOptions: {
    //         // blahblah
    //         },
    //         someFlag: true
    //     }
    // });

    const loginState = null;

    let headers = {};
    
    if (multipart) {
        var boundary = "xxxxxxxxxx";
        headers['content-type'] = 'multipart/form-data; boundary=' + boundary;
    }
    
    if (loginState && loginState.token) {
        headers['Authorization'] = 'Bearer ' + loginState.token;
    }

    return new Promise(
        (resolve, reject) => {
            axios({
                method: methodType,
                url: Config.API_URL + url,
                data: data,
                headers: headers
            })
            .then(async response => {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
        });
};


export {apiRequest}