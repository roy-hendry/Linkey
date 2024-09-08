import { onRequest } from 'firebase-functions/v2/https';
  const server = import('firebase-frameworks');
  export const ssrlinkey1ef14 = onRequest({"region":"europe-west1"}, (req, res) => server.then(it => it.handle(req, res)));
  