import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(request => { //access request object and add use to register new intreceptor which takes 2 func (1. req config changing func , 2. error handling func) as input 
    console.log(request);//with just this one line it will block the request so need to return the request always
    //.... you can also edit the request config before return
    return request; // always return the request else it will block the  request

}, error => {// this error is related to sending a req for ex no internet connectivity so if request sending fails 
    console.log(error);
    return Promise.reject(error); // returning bcoz we can handle it in catch , locally in component
});

axios.interceptors.response.use(response =>{
    console.log(response);
    return response;
},error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();



// You learned how to add an interceptor, getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call eject 

// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);