let fs = require('fs')
let data = JSON.parse(fs.readFileSync('experiments.json', 'utf-8'))
let stripProtocol = url => url.replace(/^https?\:\/\//i, '')

function makePage(content) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8">
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <title>AI Experiments – Cloudera Fast Forward</title>
      <meta property="og:title" content="AI Experiments - Cloudera Fast Forward" />
      <meta content="Machine learning visualizations and code by Cloudera Fast Forward." />
      <meta property="og:description" content="Machine learning visualizations and code by Cloudera Fast Forward." />
      <meta property="og:image" content="https://experiments.fastforwardlabs.com/images/experiments-share3.png" />
      <meta property="og:url" content="https://experiments.fastforwardlabs.com"  />
      <meta name="twitter:card" content="summary_large_image" />

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140718127-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-140718127-1');
      </script>

      <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
    <body>
      ${content}
    </body>
  </html>`
}

let content = ''
let header = `
<div class="container">
  <div style="display: flex">
  <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
  <img style="margin-top: 16px; height: 12px; margin-bottom: 12px;" src="/images/cloudera-fast-forward-logo.png" />
  </a>
  </div>
  <h1>AI Experiments</h1>
  <div>Machine learning prototypes, demos, and code by <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">Cloudera Fast Forward</a>.
  </div>
</div>
<div class="spacer"></div>`
content += header

let experiments = '<div class="posts">'
for (let i = 0; i < data.experiments.length; i++) {
  let post = data.experiments[i]
  experiments += `<a class="post ${post.featured ? 'featured' : ''}" href="${
    post.url
  }">
    <div class="post-top">
      <div class="post-head">${post.head}</div>
      <h2 class="post-name">${post.name}</h2>
    </div>
    <div class="post-mid" style="background-image: url('${post.image}')"></div>
    <div class="post-bot">
      <div>${post.description}</div>
      <div class="link">${stripProtocol(post.url)}</div>
    </div>
  </a>`
}
experiments += '</div>'
content += experiments

let footer = `<div class="spacer"></div>
<div class="container">
  <h3>About</h3>
  <div >Cloudera Fast Forward is an applied machine learning research group.</div>
  <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">Cloudera</a>&nbsp; <a href="http://blog.fastforwardlabs.com">Blog</a>&nbsp; <a href="https://twitter.com/fastforwardlabs">Twitter</a>
  </div>
</div>
<div class="spacer"></div>`
content += footer

let index = makePage(content)

fs.writeFileSync('index.html', index)
