# Button

## Quick Start

1. Begin by installing with your favourite package manager:

`npm install @a2000/button`

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
    <a2k-button>Hey there</a2k-button>

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/button/a2k-button.js";
    </script>
  </body>
</html>
```

## API

| Name     | Type    | Default Value |
| -------- | ------- | ------------- |
| size     | string  | medium        |
| disabled | boolean | false         |
