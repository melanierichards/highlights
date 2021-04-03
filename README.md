# Highlights

![Screenshot of the website](assets/images/screenshot.png?raw=true)

A minisite for book and article highlights: [highlights.melanie-richards.com](http://highlights.melanie-richards.com), built with Eleventy. Highlights and covers are copyright to their respective authors. [Let’s be book friends](https://www.goodreads.com/melanierichards)

## Substantive/breaking changes

### Branch rename

The `master` branch was renamed to `main` in 2020. Folks who have forked the repo can [update their local clones using these instructions](https://www.hanselman.com/blog/EasilyRenameYourGitDefaultBranchFromMasterToMain.aspx).

### Migration from Jekyll to Eleventy

The primary purpose of this repo is to deploy [highlights.melanie-richards.com](http://highlights.melanie-richards.com), though others may feel free to remix the code for their own highlights sites. As of late 2020, according to my current development practices, this site has been converted from Jekyll to Eleventy. If you'd still prefer to use Jekyll instead, you may access [prior releases](https://github.com/melanierichards/highlights/releases) or branch off of [`jekyll`](https://github.com/melanierichards/highlights/tree/jekyll).

## To build

1. [Install Node/npm](https://nodejs.org/)
2. Run `npm install`
3. Run `npx @11ty/eleventy --serve`
4. Visit `localhost:8080`

## To deploy to a subdirectory

I've chosen to deploy my highlights to the root path of a subdomain, but others might prefer a subdirectory (e.g. `example.com/highlights/`). To do so, change the `pathPrefix` in `.eleventy.js` to specify your subdirectory (e.g. `/highlights/`). You should not need to prepend any `permalink` frontmatter or URLs referenced in templates with this subpath.

## Commands

| Command                    | Purpose                      |
| -------------------------- | ---------------------------- |
| npx @11ty/eleventy --serve | Serve project                |
| gulp sass:watch            | Watch and build sass files   |
| gulp minify-css            | Compress the output CSS file |
| netlify build              | Kick off a Netlify build locally. Useful for local validation w/ Netlify plugins. |

## Data syntax

### Book front-page matter

```
title: ""
book: dash-separated
author:
kindle: true
spoilers: false
date: YYYY-MM-DD
```

Where "dash-separated" is also the file name for the `_data` file, JPG, and SVG.

### Each highlight

```
- text: 
  page: 
  attribution: 
```