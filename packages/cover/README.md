# Cover

Renders a full height container with a central principal element, sandwiched between two optional elements

## Quick Start

1. Begin by installing with your favourite package manager:

`npm install @a2000/cover`

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
    <a2k-cover>
      <p slot="heading">Demo</p>
      <p slot="principal">Main</p>
      <p slot="footer">Copyright Ⓒ the badass</p>
    </a2k-cover>

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/progress/a2k-cover.js";
    </script>
  </body>
</html>
```

## API

| Slot      | Details                                            |
| --------- | -------------------------------------------------- |
| heading   | Element that renders at the top of the cover       |
| principal | Principal element that takes up the middle content |
| footer    | Element that renders at the bottom of the cover    |

## Notes

- This component is inspired by the cover component described int he [Every Layout](https://every-layout.dev/layouts/cover/) book
