![Example](example.png) 

[![CircleCI](https://circleci.com/gh/rohanorton/roam-day/tree/main.svg?style=shield)](https://circleci.com/gh/rohanorton/roam-day/tree/main)

# Roam Day

Show day of week under Roam page titles (zero dependencies).

Totally over-engineered for my own personal use, but feel free to play with it.

## Install

Add the code from
[here](https://raw.githubusercontent.com/rohanorton/roam-day/main/dist/main.js)
to a roam/js block in your roam graph and enable it.

You probably shouldn't trust that though, but you could use the [development
build](https://raw.githubusercontent.com/rohanorton/roam-day/main/dist/main.dev.js)
which isn't minified and so a little more readable as a result.

## Styles

Add styles using the `roam-day--day-title` class.

Suggested styles:

```css
.roam-day--day-title {
    font-size: smaller;
    color: lightgray;
    font-style: italic;
    font-variant-caps: all-petite-caps;
}
```


