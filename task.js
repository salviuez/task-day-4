
var request = new XMLHttpRequest();

request.open('get', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);

request.send();

request.onload = function(){
    var data = JSON.parse(request.response);
    console.log(data);

    for(var i in data){
        console.log(data[i].flag);
    }

}
