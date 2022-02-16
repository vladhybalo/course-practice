
// Change us!

function status(response) {
    // if (response.status >= 200 && response.status < 300) {
    //     return response;
    // }
    // throw new Error(response.statusText);
    if (response.ok) {
        return response;
    }
    throw new Error(response.statusText);;
}

function json(response) {
    // JSON.parse(response); НЕ РОБИТЬ
    return response.json();
}

function getJSON(url) {
    return window.fetch(url)
        .then(status)
        .then(json);
}

export { status, json, getJSON };
