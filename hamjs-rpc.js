const rpc = ((w, d) => {
  let self = {};

  self.connect = function connect(host) {
    self.host = host;
    return self;
  };

  self.call = function call(procedure, ...params) {
    return new Promise(function(resolve, reject) {
      const body = JSON.stringify({
        call: procedure,
        parameters: params,
      });

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function onreadystatechange(e) {
        if (e.target.readyState === 4) {
          if (e.target.status == 200) {
            resolve(e.target.responseText);
          }
          reject(e);
        }
      };

      xhr.open('POST', self.host);
      xhr.send(body);
    });
  };

  return self;
})(window, document);
