# Deploying the site

The site is built with [Gatsby.js](https://www.gatsbyjs.org).  It uses [`gh-pages`](https://www.npmjs.com/package/gh-pages) for automatic build and deployment.

To update and deploy the site, clone the repo from [https://github.com/skyscape-technologies/skyscape-technologies.github.io](https://github.com/skyscape-technologies/skyscape-technologies.github.io).  Run `git checkout deploy` to get to the 'code' (the `master` branch is the live website).  Either edit within the `deploy` branch or, more safely, `git checkout -b new-branch` and edit in `new-branch`.

When you're ready to deploy, run `npm run deploy` in the edited branch.  This will automatically build the site and push it to github in the `master` branch, updating the live site.  Don't forget to `git push origin new-branch` to make sure that your changes are kept up-to-date in the repo.

You're done!