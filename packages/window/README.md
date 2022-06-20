# Window

A draggable and closeable window that can be used to display content

## Usage

1. Begin by installing with your favourite package manager:

`npm install @a2000/window`

2. Use within your HTML templates as follows:

```html
<script type="module">
  import "a2k-window/a2k-window.js";
</script>

<a2k-window draggable closeable heading="Window Content">
  <p>You can place anything in here</p>
</a2k-window>
```

## API

| Name      | Type    | Default Value |
| --------- | ------- | ------------- |
| heading   | string  | ""            |
| draggable | boolean | false         |
| closeable | boolean | false         |
