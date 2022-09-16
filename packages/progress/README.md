# Progress

Renders a loading indicator

## Quick Start

1. Begin by installing with your favourite package manager:

`npm install @a2000/progress`

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
    <a2k-progress progress="50" />

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/progress/a2k-progress.js";
    </script>
  </body>
</html>
```

| Name     | Type   | Default Value | Description                                                             |
| -------- | ------ | ------------- | ----------------------------------------------------------------------- |
| progress | number | 0             | The current progress of the component. Must be a number between 0 - 100 |
