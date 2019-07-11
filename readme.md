# SQL Notify Node

This is a project under development for the intentions of easily deploying node servers that watch for SQL changes.

To deploy, you must create a .env file and populate it with your SQL credentials.

Then, you need to enable your bin logging in order for it to detect changes.

On my server, I found that I needed to enable the bin log here:

```
> /etc/mysql/mysql.conf.d/mysqld.cnf
```

You'll need to uncomment the following lines:
```sh
#server-id	= 1
#log_bin	= /var/log/mysql/mysql-bin.log
```

Once that is done, run the following command:

```sh
$ node index.js
```

Once that is done, you have a NodeJs Server that can listen for live SQL changes. You may pass this information wherever you wish.


### If you feel that this code is useful...

Please give me a follow or subscribe in the following:

|Twitter|Github|Youtube|Twitch|Linkedin|Personal Site|
| ----- | ---- | ----- | ---- | ------ | ----------- |
|[MathisonProject](https://twitter.com/MathisonProject)|[Divinityfound](https://github.com/Divinityfound)|[Jacob Mathison](https://www.youtube.com/channel/UCNNxB1TRbdJxE_y51sJb9DA)|[MathisonProjects](http://twitch.tv/mathisonprojects)|[Jacob Mathison](https://www.linkedin.com/in/jacob-a-mathison-62359912/)|[Mathison Projects](http://mathisonprojects.com)|