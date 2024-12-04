
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/cv"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  assets: new Map([
['index.csr.html', {size: 4972, hash: 'c4b5fd709c23e1398137ad4b6c8794d63e42abd2c3cbd3c241e640e1f5d9ba6d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1071, hash: '833218c936cd5e23c30f13e286fa13cfb311fc59ddff6adadb98b2566a505050', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 15553, hash: '7f540bda2d94dbfe2304369e814fed07f12ecfbc67f2e6cc62db52f00f85f583', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['cv/index.html', {size: 25345, hash: '42e0230aefbb32360d59686323eb8b7370cca9852d539209234a500e2947df65', text: () => import('./assets-chunks/cv_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 15553, hash: '7f540bda2d94dbfe2304369e814fed07f12ecfbc67f2e6cc62db52f00f85f583', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['projects/index.html', {size: 10612, hash: '0818535f047ca68b21b8c5380ca1f801afd8f6f60a0039fa83f30ca860c30c21', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)}], 
['contact/index.html', {size: 11389, hash: '293d7f172f48f433aac1dbe7e99573096413ccf43ecf4d54ab7163c664e15853', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)}], 
['styles-K5IZFOXU.css', {size: 420601, hash: 'B3mWdrIQr/4', text: () => import('./assets-chunks/styles-K5IZFOXU_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
