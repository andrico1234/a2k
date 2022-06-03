# Window

A draggable and closeable window that can be used to display content

## Installation

```bash
npm i a2k-window
```

## Usage

```html
<script type="module">
  import "a2k-window/a2k-window.js";
</script>

<a2k-window draggable closeable>
  <h1>Window content</h1>
  <p>You can place anything in here</p>
</a2k-window>
```

## API

| Name      | Type    | Default Value |
| --------- | ------- | ------------- |
| title     | string  | ""            |
| draggable | boolean | false         |
| closeable | boolean | false         |
