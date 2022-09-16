# Desktop

A full height grid container that can be used to render desktop icons.

## Usage

1. Begin by installing with your favourite package manager:

`npm install @a2000/desktop`

2. Use within your HTML templates as follows:

```html
<script type="module">
  import "a2k-desktop/a2k-desktop.js";
  import "a2k-desktop/a2k-desktop-icon.js";
</script>

<a2k-desktop>
  <a2k-desktop-icon icon="help-icon" text="help"></a2k-desktop-icon>
</a2k-desktop>
```

## API

### A2kDesktop

The component where all of your desktop content will live

### A2kDesktopIcon

| Name   | Type     | Default Value | Details                                                                |
| ------ | -------- | ------------- | ---------------------------------------------------------------------- |
| text   | string   | ""            | The text content associated with the icon                              |
| icon   | string   | ""            | The icon that will be displayed. Can be any valid A2kIcon icon name    |
| onOpen | function | ""            | The callback that will be fired after double-clicking the desktop icon |
