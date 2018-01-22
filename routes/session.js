import unirest from 'unirest';

class Session  {
      constructor(callback) {
        console.log("NEW SESSION");
        this.getSession = function() {
          var user = "Nlanatta";
          var password = "Novi2017";
          var responses = [];
          console.log(user);
          var Request = unirest.post('https://jira.registeredsite.com/rest/auth/1/session');
          Request.headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
          Request.send({ "username": user, "password": password });
          Request.end(function (response) {
            responses.push(response.body)
            console.log(response.body);
            callback(responses[0]);
          });
        };
    }
}

module.exports = Session;
