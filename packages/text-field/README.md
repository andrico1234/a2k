# Text Field

Renders a text field with a windows 2000 flavour

## Usage

1. Begin by installing with your favourite package manager:

`npm install @a2000/text-field`

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
    <form>
      <a2k-text-field name="demo"></a2k-text-field>
    </form>

    <!-- a2k web components use standard JavaScript modules. -->
    <script type="module">
      import "@a2000/text-field/a2k-text-field.js";
    </script>
  </body>
</html>
```

## API

### Properties

| Name | Type   | Default Value | Details                                                                                                  |
| ---- | ------ | ------------- | -------------------------------------------------------------------------------------------------------- |
| name | string | -             | The name for the input control. It's submitted along with the control's value when the data is submitted |
