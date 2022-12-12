# Window

## a2k-window

A draggable and closeable window that can be used to display content.

### Usage

1. Begin by installing with your favourite package manager:

`npm install @a2000/window`

2. Use within your HTML templates as follows:

```html
<script type="module">
  import "@a2000/window/a2k-window.js";
</script>

<a2k-window draggable closeable heading="Window Content">
  <p>You can place anything in here</p>
</a2k-window>
```

### API

| Name      | Type    | Default Value | Description                          |
| --------- | ------- | ------------- | ------------------------------------ |
| heading   | string  | ""            | -                                    |
| draggable | boolean | false         | -                                    |
| closeable | boolean | false         | -                                    |
| x         | string  | 32            | The initial x position of the window |
| y         | string  | 32            | The initial y position of the window |

## a2k-window-context

TODO: Add example for a2k-window-context

Display number of active windows in the toolbar
