# Taskbar

Renders a fully functoining windows-inspired taskbar

## Usage

1. Begin by installing with your favourite package manager:

`npm install @a2000/taskbar`

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
    <a2k-taskbar />

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/progress/a2k-taskbar.js";
    </script>
  </body>
</html>
```

## Notes

Currently the api doesn't allow for any customisation, though this will likely change
