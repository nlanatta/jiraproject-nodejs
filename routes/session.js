import unirest from 'unirest';

class Session  {
      constructor(u, p, c) {
        this.user = u;
        this.password = p;
        this.callback = c;
        this.name = "";
        this.value = "";
    }
    get session() {
      var user = this.user;
      var password = this.password;
      var responses = [];
      var name = "";
      var value = "";
      var callback = this.callback;
      console.log(user);
      var Request = unirest.post('https://jira.registeredsite.com/rest/auth/1/session');
      Request.headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
      Request.send({ "username": user, "password": password });
      Request.end(function (response) {
        responses.push(response.body)
        console.log(response.body);
        name = responses[0].session.name;
        value = responses[0].session.value;
        callback(responses[0]);
      });

      this.name = name;
      this.value = value;
    }
    get cookie() {
      return this.name+"="+this.value;
    }
}

module.exports = Session;
