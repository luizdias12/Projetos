const axios = require('axios').default;

axios.get('http://192.168.200.42:3456/numsorte')
 .then(function(response) {
    console.log(response.data)
 });