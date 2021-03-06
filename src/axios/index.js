import JsonP from 'jsonp';
import axios from "axios";
import { Modal, message } from 'antd';

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, (err, response) => {
                if (response.status == "success") {
                    resolve(response);
                } else {
                    reject(response.message);
                }
            })
        });
    }

    static ajax(options) {
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById("ajaxLoading");
            loading.style.display = "block";
        }
        const baseURL = "https://www.easy-mock.com/mock/5d999a688c63954ea11dd413/mock";
        return new Promise((resolve, reject) => {
            axios({
                baseURL: baseURL,
                url: options.url,
                timeout: 5000,
                method: "get",
                params: (options.data && options.data.params) || ""
            }).then((res) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById("ajaxLoading");
                    loading.style.display = "none";
                }
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        resolve(res.data)
                    } else {
                        Modal.info({
                            title: "提示",
                            content: "数据错误"
                        })
                    }
                } else {
                    reject(res.data)
                }
            }).catch(error=>{})
        })
    }
}