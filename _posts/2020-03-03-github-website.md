---
title: Creating a free website on GitHub pages
date: 2020-03-03 18:36:47 Z
layout: post
---

# Creating a free website on GitHub

1. Log in to GitHub https://github.com/login
1. Create a **new repository**
    * Click the top-right **+** (plus) button
![](https://i.imgur.com/FY8FPXc.png)
    * Or go to https://github.com/new
1. Name the repository whatever you want, like
    * **mywebsite** or **testing**
1. Create a file (or upload one you have)
   * Click the `creating a new file` link:
   ![](https://i.imgur.com/RyLqenC.png)
1. Name the file `index.html`
1. Add something to the file (like 'Hello')
  ![](https://i.imgur.com/go2AUk0.png)
1. Click the green button **Commit** to Save the file (at the bottom)
  ![](https://i.imgur.com/vZoNnpT.png)

Now we have created a file with some content in a repository.

## Enabling GitHub pages
Next we need to tell GitHub we want this repository to be a website!

1. Click the **Settings** tab for your repository
  ![](https://i.imgur.com/6zir2kQ.png)
1. Scroll down until you find the **GitHub settings**
   * Enable GitHub pages by clicking the **None** dropdown and selecting **master branch** (first option)
  ![](https://i.imgur.com/bpeZFTX.png)
1. GitHub will now enable your page.
1. Scroll down again so you can see the link to your website
  ![](https://i.imgur.com/xLbwfY1.png)

Thats it! 
**Congratulations** on your very own website!

## Next steps (optional)
1. Learn HTML
    * https://www.w3schools.com/html/
    * https://www.codecademy.com/learn/learn-html
1. Learn CSS
      * https://www.w3schools.com/css/
1. Learn JavaScript

## Using a custom domain (advanced)
In the GitHub **Settings** you can also add your **own domain** like mydomain.com

You need to have:
1. Bought a domain!
2. Pointed the DNS records to GitHub pages
   * https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site
   * On the website you bought your domain:
   * Create an A record pointing to any of these IPs:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

