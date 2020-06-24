import requestHeaders from './RequestHeaders'

function get(url) {
    return fetch(url, {
        method: 'GET',
        headers: requestHeaders.headers
    }).then((response) => {
        return response.json()
    })
}

function post(url, params) {
    return fetch(url, {
        method: 'POST',
        headers: requestHeaders.headers,
        body: JSON.stringify(params)
    }).then((response) => response.json())
}

function put(url, params) {
    return fetch(url, {
        method: 'PUT',
        headers: requestHeaders.headers,
        body: JSON.stringify(params)
    }).then((response) => response.json())
}

function del(url) {
    return fetch(url, {
        method: 'DELETE',
        headers: requestHeaders.headers,
    }).then((response) => response.json())
}

function postFile(url, key, params) {
    let formData = new FormData()
    // console.log('url',url)
    // console.log('key',key)
    // console.log('params',params)
    // const file ={  uri: params.imageUrl, 
    // type: params.imageType, 
    // name: params.imageName}
    formData.append(key, params)
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData,
    }).then((response) => {
        return response.json()
    })
}

export default { get, post, put, del, postFile }