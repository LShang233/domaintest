// hello.js
exports.handler = async function (event, context, callback) {
  // if (event.httpMethod !== 'POST') {
  //   return {
  //       statusCode: 501,
  //       body: JSON.stringify({ message: "Not Implemented" }),
  //       headers: { 'content-type': 'application/json' }
  //   }
  // }
  // callback(null, {
  //   statusCode: 200,
  //   body: event.httpMethod + "Hello World"
  // })
  if(event.httpMethod == 'POST') {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World" }),
    };
  }
  else {
    callback(null, {
      statusCode: 200,
      body: event.httpMethod + ": Hello World"
    })
  }
}
