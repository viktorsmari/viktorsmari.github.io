---
title: Installing PostgreSQL on Ubuntu 22 to use with Ruby on Rails
date: 2022-10-16 15:36:47 Z
layout: post
---


I use Ubuntu for developing Ruby on Rails apps, and usually use **PostgreSQL** for the database.

On **Ubuntu 22** this is how I install and setup PostgreSQL on a newly installed machine.


1. **Install PostgreSQL** on the machine, and the `psql` client:

    `sudo apt-get install postgresql-14 postgresql-client`

2. Open the PostgreSQL shell as the `postgres` user:

    `sudo -u postgres psql`

3. In the `psql` shell, create or alter a user with the rights to create databases. Make sure the username matches your Ubuntu username:

    `create user viktor with superuser;

    OR if the `psql` already user exists:

    `alter user viktor with superuser;

You can verify if your use has **superuser** privileges with this command:

  `\du`

And then exit the `psql` shell by typing `exit` or CTRL+D

With these settings there should be no need to edit any PostgreSQL config files.

In a new Ruby on Rails project, you should be able to create databases for example using:

`rails db:setup`


The solution above *should* prevent errors like:
- `PG:ConnectionBad:` connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: No such file or directory. Is the server running locally and accepting connections on that socket?
- `ActiveRecord::NoDatabaseError:` connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL: role does not exist
- `ActiveRecord::NoDatabaseError:` connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL: database does not exist
