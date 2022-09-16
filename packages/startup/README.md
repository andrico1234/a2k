# Startup

Startup window that can be used to simulate a Windows 2000 startup screen. This window can also be used to perform background process, such as loading assets, registering web components, running resource intensive scripts.

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
      import "@a2000/startup/a2k-startup.js";
    </script>
  </body>
</html>
```

## API

### Properties

| Name        | Type   | Default Value                        | Details                                                |
| ----------- | ------ | ------------------------------------ | ------------------------------------------------------ |
| startupTime | number | 3000                                 | The length of time the desktop takes to start up       |
| footerText  | string | Copyright Ⓒ 1999 - 2000 Andricos2000 | The text render at the bottom of the startup component |

### Events

| Name             | Details                                                       |
| ---------------- | ------------------------------------------------------------- |
| startup-progress | Fires when the progress the specified loading time is elapsed |
