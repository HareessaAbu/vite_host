import Api from '@packages/restapi';

console.log(Api)
// let apiHost = document.querySelector('meta[name="api-host"]').content;
let apiHost = 'http://localhost:1000';

Api.host(apiHost).suffix(`api`);

export default Api;
