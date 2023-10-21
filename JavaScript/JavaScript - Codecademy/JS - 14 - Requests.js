REQUESTS

		----   XHR GET Requests   ----
//code for an AJAX GET request using an XMLHttpRequest object

const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
};
xhr.open('GET', url)
xhr.send()


		----   XHR POST Requests   ----
//code for an AJAX POST request using an XMLHttpRequest object

const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
};
xhr.open('POST', url);
xhr.send(data);


		----   POST request to API   ----
//making a POST request to the Rebrandly API to shorten a URL

// Information to reach API
const apiKey = '756d3ae8e2f148a789a4d14367ae387f';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
};

		----   FETCH() GET Requests   ----

fetch('https://api-to-call.com/endpoint')
  .then(
    response => {
      if (response.ok){
        return response.json();
      }
      throw new Error('Request failed!');
    },
    networkError => {
      console.log(networkError.message);
    }
  )
  .then(
    jsonResponse => {
      return jsonResponse;
    }
  )

Exemple 2:
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  fetch(endpoint, {cache: 'no-cache'})
    .then(
      (response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Request failed!')
      },
      (networkError) => {
        console.log(networkError.message)
      }
    )
	.then(
      (jsonResponse) => {
        renderResponse(jsonResponse)
      }
    )
};


		----   FETCH() POST Requests   ----

fetch('https://api-to-call.com/endpoint', {
  method: 'POST', 
  body: JSON.stringify({id: '200'})
})
  .then(
    (response) => {
      if (response.ok) {
        return response.json()
      };
      throw new Error('Request failed!');
    },
    (networkError) => {
      console.log(networkError.message);
    }
  )
  .then(
    (jsonResponse) => {
      
    }
  )

Exemple 2:
const apiKey = '756d3ae8e2f148a789a4d14367ae387f';
const url = 'https://api.rebrandly.com/v1/links';

const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, 
    {
      method: 'POST',
      headers: 
        {
          'Content-type': 'application/json',
          'apikey': apiKey
        },
      body: data
    })
  .then
    (
      (response) => 
        {
          if(response.ok) 
            {
              return response.json()
            };
          throw new Error ('Request failed!');
        },
      (networkError) => 
        {
          console.log(networkError.message);
        }
    )
  .then
    (
      (jsonResponse) =>
        {
          renderResponse(jsonResponse)
        }
    )
};


		----   ASYNC GET Requests   ----

Exemple 1:
const getData = async () => 
  {
    try
      {
        const response = await fetch('https://api-to-call.com/endpoint');
        if(response.ok)
          {
            const jsonResponse = await response.json();
            return jsonResponse;
          }
        throw new Error('Request failed!')
      }
    catch(error)
      {
        console.log(error);
      }
  };

Exemple 2:
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () =>
  {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try
      {
        const response = await fetch(endpoint, {cache: 'no-cache'})
        if(response.ok)
          {
           const jsonResponse = await response.json();
           renderResponse(jsonResponse)
          }
      } 
    catch(error)
      {
        console.log(error);
      }
  }

Exemple 3:
const getData = async () =>
  {
    try
      {
        const response = await fetch
          (
            'https://api-to-call.com/endpoint',
            {
              method: 'POST',
              body: JSON.stringify({id: 200})
            }
          )
        if (response.ok)
          {
            const jsonResponse = await response.json()
            return jsonResponse
          }
        throw new Error('Request failed!')
      }
    catch(error)
      {
        console.log(error)
      }
  }

Exepmle 4:
// information to reach API
const apiKey = '756d3ae8e2f148a789a4d14367ae387f';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () =>
  {
    const urlToShorten = inputField.value
    const data = JSON.stringify({destination: urlToShorten})
    try
      {
        const response = await fetch(url, 
          {
            method: 'POST',
            body: data,
            headers:
              {
                'Content-type': 'application/json',
                'apikey': apiKey
              }
          })
        if(response.ok)
          {
            const jsonResponse = await response.json()
            renderResponse(jsonResponse)
          }
      }
    catch(error)
      {
        console.log(error)
      }
  }




