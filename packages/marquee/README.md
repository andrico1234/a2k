# Marquee

## Quick Start

1. Begin by installing with your favourite package manager:

`npm install @a2000/marquee`

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
    <a2k-marquee>
      <p slot="text">Relive the golden era of the internet with the Marquee</p>
    </a2k-marquee>

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/marquee/a2k-marquee.js";
    </script>
  </body>
</html>
```

## API

| Slot | Details                              |
| ---- | ------------------------------------ |
| text | The content that the marquee renders |

## Notes

Since there are usability considerations when using a marquee component, the animation doesn't run if the user `prefers-reduced-motion`.
