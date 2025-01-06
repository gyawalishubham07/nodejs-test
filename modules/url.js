import url from 'url'

const urlString="https://www.codeit.com.np/search-course?q=node+js"

const urlObject= new URL(urlString)  //break the url into it's parts
// console.log(urlObject);   

// console.log(url.format(urlObject));  //combine the breaks parts into single url like in urlstring



// //query params   => search: '?q=node+js', searchParams: URLSearchParams { 'q' => 'node js' },

const params= new URLSearchParams(urlObject.search);  //  URLSearchParams { 'q' => 'node js' }

console.log(params);   

//update the params 
params.set('q',"React JS");  //   URLSearchParams { 'q' => 'React JS' }
console.log(params);


// add parasm in url
params.append('date','2081-09-06');   //   URLSearchParams { 'q' => 'React JS', 'date' => '2081-09-06' }
console.log(params);

