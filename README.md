# Highlights

![Screenshot of the website](assets/images/screenshot.png?raw=true)

Nothin’ fancy, just a little Jekyll/GH Pages minisite for book and article highlights: [highlights.melanie-richards.com](http://highlights.melanie-richards.com) Highlights and covers are copyright to their respective authors. [Let’s be book friends](https://www.goodreads.com/melanierichards)

Note: the `master` branch has been renamed to `main`. Folks who have forked the repo can [update their local clones using these instructions](https://www.hanselman.com/blog/EasilyRenameYourGitDefaultBranchFromMasterToMain.aspx).

## Data syntax

### Book front-page matter

```
---
layout: post
title: ""
book: dash-separated
author:
kindle: true
date: YYYY-MM-DD
---
```

Where "dash-separated" is also the file name for the `_data` file, JPG, and SVG.

### Each highlight

```
- text: 
  page: 
  attribution: 
```