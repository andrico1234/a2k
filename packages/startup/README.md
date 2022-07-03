# Startup

Startup window that can be used to simulate a Windows 2000 startup screen. It can also be used to set up assets and

## Quick Start

1. Begin by installing with your favourite package manager:

`npm install @a2000/startup`

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
    <a2k-startup></a2k-startup>

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/progress/a2k-startup.js";

      const startupEl = document.querySelector("a2k-startup");

      startupEl.addAttribute("messages", ["Downloading assets", ""]);
    </script>
  </body>
</html>
```

## API

### Properties

| Name        | Type     | Default Value                        | Details                                                                     |
| ----------- | -------- | ------------------------------------ | --------------------------------------------------------------------------- |
| startupTime | number   | 5000                                 |                                                                             |
| image       | string   | undefined                            | Image placed in the center of the screen, pass a relative path to the image |
| footerText  | string   | Copyright Ⓒ 1999 - 2000 Andricos2000 |                                                                             |
| messages    | string[] | ...                                  |                                                                             |

### Events

| Name             | Details                                                       |
| ---------------- | ------------------------------------------------------------- |
| startup-complete | Fires when the progress the specified loading time is elapsed |
