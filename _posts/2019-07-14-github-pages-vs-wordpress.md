---
layout: post
title: Wordpress vs Github Pages
---

**Wordpress** is a blog CMS that reads and saves data into an SQL database, making it a target for [SQL injection](https://en.wikipedia.org/wiki/SQL_injection).

**Github Pages** is a hosting solution, that only hosts **Static websites** which do not use an SQL database.

**Static websites** are simply files in a folder (or Github repository).  

### Platforms to store Static websites
* [Github Pages](https://pages.github.com/)
* [Gitlab Pages](https://about.gitlab.com/product/pages/)
* [Netlify](https://www.netlify.com/) [(See netlify / GH Pages comparison)](https://www.netlify.com/github-pages-vs-netlify/)
* [Zeit](https://zeit.co/)


### Static Website Generators
Most popular:
* [Next.js](https://nextjs.org/)
* [Jekyll](https://jekyllrb.com/) - *Transform your plain text into static websites and blogs.*
* Hugo
* [Gatsby](https://www.gatsbyjs.org/)
* GitBook
* VuePress
* See the [longer list here](https://www.staticgen.com/)


### Content Management Systems (CMS) for Static websites
* [Forestry.io](https://forestriy.io) - *A static CMS that commits.*
* [CloudCannon](https://cloudcannon.com/) - *The Cloud CMS for Jekyll.*
* [Siteleaf](https://www.siteleaf.com/) - *A friendly CMS for your static site*


### Technical dept 

*[Technical debt](https://en.wikipedia.org/wiki/Technical_debt) (also known as design debt or code debt) is a concept in software development that reflects the implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer.*


###### Installing a Wordpress site requires:
1. A server with SSH access. (Digital Ocean, Linode etc).
2. Installing a Webserver (Apache / Nginx) and an SQL database (MySQL / MariaDB)

###### A Wordpress maintainer needs access to:
* The server via SSH (username / password)
* The Wordpress backend [example.com/wp-admin]()
* SQL database on the server (username / password / database_name) via MySQL

###### A Wordpress maintainer would need to **periodically** do the following:
* Update ALL plugins the site is using. A single outdated plugin can be the cause of your website being **hacked**.
* Update security updates on the server, MySQL, nginx etc.
* Make sure the SQL database is being **backed up** to a different server.
* Make sure the uploaded files (images etc) are being **backed up** to a different server.
* Re-install the server, if running Ubuntu LTS, **every 5 years**. Usually a new server is created and everything migrated to the new one. This takes hours.

Who knows the username / password to that website we made 2 years ago?

##### Github Pages maintainer / developer would need to:
* Be granted write access to the repository on Github.


### Thoughts

* Will your website be alive in 5 years? What about 10 years?

### Prior Wordpress experience

I have worked on multiple Wordpress websites, and below is a list of some things I have encountered.

* Someone installed plugin that was able to **edit** the CSS on the server. The code on the server is now different from the code on Github, that the new developer is working on. Which codesource is the **correct** one?
* Someone installed plugin that did the same as another plugin, and those 2 plugins were fighting and nobody knew what was causing the weird issue.
* More people installed more plugins and the site got slower.
* Some of those plugins were not being maintained and were **out of date** and a security risk.
* One out of date plugin caused the website to be injected with hidden keywords like (BRAND NAME glasses / clothes), which in this case, did not break the website, but **lowered** it's search ranking.
[Google penalizes hacked sites](https://developers.google.com/web/fundamentals/security/hacked/)
* 3 years later, everyone got sick of the website and a new website had to be made from scratch, again, with Wordpress.


### Terminology
* **A static website** contains Web pages with fixed content. Each page is coded in HTML and displays the same information to every visitor.
* **Dynamic websites** contain Web pages that are generated in real-time. They might need to query a database (like MySQL) and then render the data. This is slow.

