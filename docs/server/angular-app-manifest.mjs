
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 501, hash: 'c29ef61d61da13bc3587c32fa95e5ee5db68cb2aab20f56fe69d73a74830c076', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: '9402a8a553e934fbe77b7f81536dd0611f8d3288a812870373579b6b88d281fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20840, hash: '0ee468b8cb71ccf02b79a2795bd65594632d6c8545cd41ef25704a06da30caae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
