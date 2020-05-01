This repo runs our experiments page: https://experiments.fastforwardlabs.com 

To add a new link, edit the experiments.json file: https://github.com/fastforwardlabs/exp/blob/master/experiments.json

Use the other entries as an example. (Note that the featured boolean just determines the size of the box.)

If you would like to add an image, go to the uploads folder and drag and drop your image file: https://github.com/fastforwardlabs/exp/tree/master/images/uploads

The HTML is automatically rebuilt through github actions, so any changes you make should be visible on the live site in 1-2 minutes.

## Running locally

You can also clone the repo and run it locally so that you can preview changes locally before deploying.

```
git clone git@github.com:fastforwardlabs/exp.git
cd exp
npm install
npm run dev
```

Running those commands should open a locally running version of the page in your browser. Any edits you make will be automatically reloaded in your browser.

To deploy your changes, commit them and push to master (deployment is automatic on push).

Sometimes the live-reloading server doesn't work, if you're not seeing changes instantly reloaded in the browser, try stopping `npm run dev` and starting it again.
