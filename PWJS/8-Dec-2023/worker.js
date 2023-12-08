const req = new Request('catlog.json');

fetch(req)
.then(function (resp) {
    return resp.json();
})
.then(function(catlog){
    return catlog.Plants;
})
.then(function(plants) {
    postMessage(plants);    
})

