# Icons

## Quick Start

1. Begin by installing with your favourite package manager:

`npm install @a2000/icons`

2. Use within your HTML templates as follows:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Quick Start</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <!-- Use web components in your HTML like regular built-in elements. -->
    <a2k-icon icon="{iconId}" />

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/icons/a2k-icons.js";
    </script>
  </body>
</html>
```

## Available Icons

| Icon      | Id             |
| --------- | -------------- |
| Documents | documents-icon |
| Help      | help-icon      |
| Network   | network-icon   |
| Twitter   | twitter-icon   |
| Windows   | windows-icon   |
| GitHub    | github-icon    |
| Cross     | cross-icon     |
| Internet  | internet-icon  |
| Info      | info-icon      |
| Shut Down | shut-down-icon |
| Chevron   | chevron-icon   |

## Notes

### Changing size of icon

The size of the icon is determined by its inherited font-size. To change the font-size, adjust the font-size of its containing element.

Example:

```html
<span className="large-icon">
  <a2k-icon icon="{iconId}" />
  Icon Label
</span>
```

```css
.large-icon {
  font-size: 2rem;
}
```

## Troubleshooting

If you're using Vite for your development environment, you may come across the following issue:

`Uncaught TypeError: Failed to construct 'URL': Invalid URL at A2kIcon.js`

This is due to a [known issue with Vite](https://github.com/vitejs/vite/issues/7287). It appears that `import.meta.url` is not made available to dependencies that have been optimised when developing. The behaviour seems to work as normal when building the prod bundle.

To prevent this issue, we need to ask Vite to not optimise this particular package. Add the following to your `vite.config.js` file:

````js
optimizeDeps: {
  exclude: ["@a2000/icons"],
},
```.
````
