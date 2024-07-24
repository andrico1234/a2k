# Styles

The default stylesheet for a2k.

## Quick Start

### Using a package manager

1. Begin by installing with your favourite package manager:

`npm install @a2000/styles`

2. Use within your HTML template as follows:

```html
<html lang="en-GB">
  <head>
    <link rel="stylesheet" href="./node_modules/@a2000/styles/a2k-styles.css" />
  <body>
  </body>
</html>
```

### Using a CDN

1. Add the following link to your HTML template

```html
<html lang="en-GB">
  <head>
    <link rel="stylesheet" href="https://unpkg.com/@a2000/styles/a2k-styles.css" />
  <body>
  </body>
</html>
```

## Utilities

This package offers a handful of utilities that can be used instead of web components to prevent FOUC

### .fixed-container

Fixes the element to across the entire height and width of the viewport. This can be used for loading screens.

## Overriding default styles

These styles can be overriden by:

- Providing your own base stylesheet that uses the same CSS variables
- Overriding the CSS variables in a css file imported later in the DOM
