# A2K (a2000)

![Andricos2000. Build retro user interfaces with modern web technologies](./static/cover%402x.png "Cover")

Welcome to a2000 (or a2k for short).

This UI library is designed to capture the feel of the early web, while employing modern UX and web practices.

Note: This is a work in progress, you should not use it in production. But if you decide to try it out, any and all feedback is welcome!

Check out:

- The [docs](https://a2000-docs.netlify.app/) for an overview of a2k
- The [demo](https://a2000.netlify.app) site for the full a2k experience.
- The [storybook](https://a2000-storybook.netlify.app/) to play with each component.

---
## Sponsor
Learn to build a component library using minimal tech with [Component Odyssey](https://component-odyssey.com/). As a result, you'll:

- Become a more future-proof web developer
- Build components that your users will love
- Boost your career opportunities
- Learn to do more with less
---

## Components

- [a2k-blue-screen](https://github.com/andrico1234/a2k/tree/main/packages/blue-screen)
- [a2k-button](https://github.com/andrico1234/a2k/tree/main/packages/button)
- [a2k-cover](https://github.com/andrico1234/a2k/tree/main/packages/cover)
- [a2k-desktop](https://github.com/andrico1234/a2k/tree/main/packages/desktop)
- [a2k-icons](https://github.com/andrico1234/a2k/tree/main/packages/icons)
- [a2k-marquee](https://github.com/andrico1234/a2k/tree/main/packages/marquee)
- [a2k-panel](https://github.com/andrico1234/a2k/tree/main/packages/panel)
- [a2k-progress](https://github.com/andrico1234/a2k/tree/main/packages/progress)
- [a2k-select](https://github.com/andrico1234/a2k/tree/main/packages/select)
- [a2k-stack](https://github.com/andrico1234/a2k/tree/main/packages/stack)
- [a2k-startup](https://github.com/andrico1234/a2k/tree/main/packages/startup)
- [a2k-styles](https://github.com/andrico1234/a2k/tree/main/packages/styles)
- [a2k-taskbar](https://github.com/andrico1234/a2k/tree/main/packages/taskbar)
- [a2k-text-field](https://github.com/andrico1234/a2k/tree/main/packages/text-field)
- [a2k-utilities](https://github.com/andrico1234/a2k/tree/main/packages/utilities)
- [a2k-window](https://github.com/andrico1234/a2k/tree/main/packages/window)

## Development

### Running a2k ui locally

Begin by forking the repo. Whilst in the root directory:

run nvm use, or ensure you're the node version specified in the .nvmrc file.

- install dependencies using yarn.
- ensure the tests are passing by running yarn test.
- kick off the dev server by running yarn develop.
- run the docs site locally using yarn docs:start.
- jump into whichever you package you want to change.
- view your changes in your locally running docs.

## Tech stack

a2k uses:

- 💪🏾 TypeScript to keep things strong(ly typed).
- 🔥 Lit for quickly crafting reactive web components
- 📝 Changesets to manage changelogs, versioning, and publishing.
- 🛠 Web Test Runner for browser testing.
- 🧼 ESLint + Prettier for keeping code clean like a money machine.
- 🎨 Storybook for cataloging each component.
- ☁️ Netlify for hosting a2k in the cloud.
- 🙋🏽‍♂️ Andrico for keeping things ticking along.

## Basic Usage

## CSS

To utilise the default CSS stylesheets for a2k, you'll need to install or download the styles.

View the [@a2000/styles](https://github.com/andrico1234/a2k/tree/main/packages/styles) for installation instructions.

Every a2k web component inherits styles from the CSS variables defined in the `a2k-styles.css` file. These styles can be overridden by applying styles to the same variables at a later point in the cascade.

E.g. Overriding the default font-family from `Tahoma` to `Verdana` can be done in the following way:

```html
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@a2000/styles/a2k-styles.css"
    />
    <link rel="stylesheet" href="./custom-styles.css" />
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```

`./custom-styles.css `

```css
:root {
  --font-primary: Verdana;
}
```

You can view which css variables you can override from within the [a2k-styles.css](https://github.com/andrico1234/a2k/blob/main/packages/styles/a2k-styles.css) file
