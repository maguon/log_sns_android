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

function postFile(url, params) {
    let formData = new FormData()
    //{ image: params.imageUrl, type: params.imageType, name: params.imageName }
    formData.set("image", params.imageUrl)
    formData.set("type", params.imageType)
    formData.set("name", params.imageName)
    console.log('formData',formData)
    return fetch(url, {
        method: 'POST',
        headers: requestHeaders.formHeaders,
        body: formData,
    }).then((response) =>{
        console.log(1111)
        return response.json()
    } )
}

export default { get, post, put, del, postFile }