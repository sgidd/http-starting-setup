import axios from 'axios';

const instance = axios.create({
    baseURL :'https://jsonplaceholder.typicode.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


instance.interceptors.request.use(request => { //access request object and add use to register new intreceptor which takes 2 func (1. req config changing func , 2. error handling func) as input 
    console.log(request);//with just this one line it will block the request so need to return the request always
    
   
    return request; // always return the request else it will block the  request

}, error => {// this error is related to sending a req for ex no internet connectivity so if request sending fails 
    console.log(error);
    return Promise.reject(error); // returning bcoz we can handle it in catch , locally in component
});
export default instance;

//Now we can import this instance in the comp needed and can be used in place og global axios config set in index.js
//this instance will also override the header config for authorization
//import it in blog.js to test