---
title: Adding signature to a PDF in Linux, Ubuntu
date: 2018-08-23 17:36:47 Z
categories:
- linux
- pdf
layout: post
---

How to annotate a PDF on Linux, Ubuntu?

Do you want to add your **signature** in Linux, Ubuntu, just like in Preview on MacOS?

You can do so easily with the Xournal tool, and Google Drawings.

### Create the signature as a SVG


1. Open <a href="http://drive.google.com/" target="_blank">Google Drive</a>


2. Click **New** (maybe you need to click **More**) and **Google Drawings**

3. Click the *line with 2 dots* next to the *Arrow* and select **Scribble**

    * ![Google Draw](/assets/googledraw.png)
4. Create your signature and click **File** and **Download as** `.svg`

If we use `.svg`, then the signature won't loose quality when scaling. Feel free to use `.jpg` or `.png`


### Install Xournal for Linux

To add the signature we just created, to a `.pdf`, we will use the free software [Xournal](http://xournal.sourceforge.net/)

1. Install Xournal

    `apt-get install xournal`

2. Open Xournal and select **File** menu -> **Annotate PDF** and choose your `.pdf` file.

3. Click **Tools** menu -> **Image**
  * Or click the **Image**, (icon of a person) ![Xournal](/assets/xournal.png)

4. Select **File** menu -> **Export to PDF**


This is based on this [stackexchange answer](https://unix.stackexchange.com/questions/85873/how-can-i-add-a-signature-png-to-a-pdf-in-linux)
