# Stack

Renders immediate child components as a vertical stack. a2k applies some vertical margin between the elements.

## Quick Start

1. Begin by installing with your favourite package manager:

`npm install @a2000/stack`

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
    <a2k-stack>
      <p>The stack component</p>
      <p>The stack component</p>
    </a2k-stack>

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/stack/a2k-stack.js";
    </script>
  </body>
</html>
```

| Slot    | Details                                             |
| ------- | --------------------------------------------------- |
| default | The child elements that will be rendered vertically |
