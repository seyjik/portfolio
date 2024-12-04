
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/cv"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio",
    "route": "/portfolio/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 4982, hash: '97a19fd2eb5158b096005238cfb218ce0cc7db08301f7e3b80972d5f4a4f143b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1081, hash: 'a868b839376904ecf4eaceff14e393efdfbeb60415cddfc35540eaa5c3af5b33', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['cv/index.html', {size: 25111, hash: 'af5d93eb87d21d0d89ae6e3e70bc9d9effc305107cd493aba48b714b3b56da13', text: () => import('./assets-chunks/cv_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 15613, hash: 'd40ed328428da74edc73d5d3b06bf25cfd5e75e5ec882598e1468549e0dbe848', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 15613, hash: 'd40ed328428da74edc73d5d3b06bf25cfd5e75e5ec882598e1468549e0dbe848', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['contact/index.html', {size: 11439, hash: 'b9ab3191242ceb7cf0a2a5791ef28cabf70eeda38828c3f09bc683e7e76f5b59', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)}], 
['projects/index.html', {size: 10662, hash: '7d25fa2f73b979b678e47f1dffd7d1a53130c9f2762fd15a2b689c2ffeab9d68', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)}], 
['styles-K5IZFOXU.css', {size: 420601, hash: 'B3mWdrIQr/4', text: () => import('./assets-chunks/styles-K5IZFOXU_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
