import md5 from "md5";

const BASE_URL = 'https://api.valantis.store:41000/';
const HEADERS = { 'Content-Type': 'application/json' };
const currentData = new Date().toISOString().slice(0, 10).replace(/-/g,"");
console.log(currentData);


function getResponseData(res) {
    if (!res.ok) {
        return res.json().then(err => Promise.reject(err));
    }
    return res.json();
}



export function getIds () {
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: { ...HEADERS, 'X-Auth' : md5(`Valantis_${currentData}`)},
        body: JSON.stringify({
            "action": "get_ids",
	        "params": {"offset": 0, "limit": 50}
        })
    })
        .then(res => getResponseData(res))
}

export function getItems (idArray) {
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: { ...HEADERS, 'X-Auth' : md5(`Valantis_${currentData}`)},
        body: JSON.stringify({
            "action": "get_items",
            "params": {"ids": idArray}
        })
    })
        .then(res => getResponseData(res))
}