# Button

## Quick Start

1. Begin by installing with your favourite package manager:

`npm install @a2000/icon-button`

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
    <a2k-icon-button icon="help-icon" text="About"></a2k-icon-button>

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/button/a2k-icon-button.js";

      const aboutIcon = document.querySelector(
        'a2k-desktop-icon[icon="help-icon"]'
      );

      aboutIcon.onOpen = () => {
        console.log("I've been double clicked");
      };
    </script>
  </body>
</html>
```

## API

### Props

| Name | Type   | Default Value |
| ---- | ------ | ------------- |
| icon | string | ""            |
| text | string | ""            |

### Events

| Name   | Description                                                    |
| ------ | -------------------------------------------------------------- |
| onOpen | The callback that fires when the user double clicks the button |
