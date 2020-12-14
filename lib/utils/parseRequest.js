module.exports = rawRequest => {
    const rawMethod = rawRequest.split(' ');
    const rawBody = rawRequest.split('\r\n\r\n');
    const parsed = {
        method:rawMethod[0],
        path: rawMethod[1],
        body: rawBody[rawBody.length - 1]
    };
  return parsed;
};
