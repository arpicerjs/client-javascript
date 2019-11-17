const rpc = ((w, d) => {
  let self = {};

  self.connect = function connect(host) {
    self.host = host;
    return self;
  };

  return self;
})(window, document);
