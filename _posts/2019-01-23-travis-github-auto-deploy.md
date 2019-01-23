---
title: Auto deploy commits from Travis to Github pages
date: 2019-01-23 11:35:17 Z
categories:
- linux
layout: post
---

## Auto deploy from Travis to Github

1. Create a key and save it to a file called `deploy_rsa`  
  `ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa`

2. Add the key, encrypted, to Travis  
  `travis encrypt-file deploy_rsa --add`

3. Add the encrypted key to git  
  `git add deploy_rsa.enc`

4. Go to the repository settings/deploy keys page on Github and add a new Deploy Key. Add the output of the following command + check Allow write  
  `cat deploy_rsa.pub`

5. Remove the actual key file so it won't be commited to the repo by accident  
  `rm deploy_rsa deploy_rsa.pub`

6. Create a `.travis-deploy.sh` script:

  ```bash
  #!/bin/sh
  set -e
  
  # setup ssh-agent and provide the GitHub deploy key
  eval "$(ssh-agent -s)"
  chmod 600 deploy_rsa
  ssh-add deploy_rsa
  
  # This method depends on how you build your project.
  # This is a node.js example:
  # commit the assets in build/ to the gh-pages branch and push to GitHub using SSH
  ./node_modules/.bin/gh-pages -d dist/ -b gh-pages -r git@github.com:${TRAVIS_REPO_SLUG}.git
  
  ```
7. Make the script runnable

  `chmod +x .travis-deploy.sh`

8. Call the `.travis-deploy.sh` script in your `.travis.yml` file

  ```bash
  deploy:
  - provider: script
    skip_cleanup: true
    script: "./.travis-deploy.sh"
    on:
      branch: master
  ```
