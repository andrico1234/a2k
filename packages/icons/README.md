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

## Notes

### Changing size of icon

The size of the icon is determined by the font-size it inherits, so to make your icon larger or smaller, adjust the font-size of its containing element.

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
