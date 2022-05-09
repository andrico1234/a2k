Welcome to a2000 (or a2k for short).

This is UI library designed to capture the feel of the early web, while employing modern UX and web practices. Think Shovel Knight, but for UI components instead of video games.

Note: This is a heavy work in progress, you should probably not use it in production. But if you decide to, any and all feedback is welcome!

Here's a work-in-progress [demo](https://a2000.netlify.app), for the curious

# Components
[a2k-button](https://github.com/andrico1234/a2k/tree/main/packages/button)
[a2k-icons](https://github.com/andrico1234/a2k/tree/main/packages/icons)
[a2k-panel](https://github.com/andrico1234/a2k/tree/main/packages/panel)
[a2k-progress](https://github.com/andrico1234/a2k/tree/main/packages/progress)
[a2k-stack](https://github.com/andrico1234/a2k/tree/main/packages/stack)
[a2k-styles](https://github.com/andrico1234/a2k/tree/main/packages/styles)
[a2k-taskbar](https://github.com/andrico1234/a2k/tree/main/packages/taskbar)
[a2k-window](https://github.com/andrico1234/a2k/tree/main/packages/window)


# Development
## Running a2k ui locally
Being by forking the repo. Whilst in the root directory:

run nvm use, or ensure you're the node version specified in the .nvmrc file.
- install dependencies using yarn.
- ensure the tests are passing by running yarn test.
- kick off the dev server by running yarn develop.
- run the docs site locally using yarn docs:start.
- jump into whichever you package you want to change
- view your changes in your locally running docs


# Tech stack
a2k uses:

💪🏾 TypeScript as the primary language to keep things strong(ly typed).
🔥 Lit for crafting quick and easy web components
📝 Changesets to manage changelogs, versioning, and publishing.
🛠 Web Test Runner for testing
🧼 ESLint + Prettier for keeping code clean like a money machine.
🤖 Commitizen + Commitlint for consistent commits.
🙋🏽‍♂️ Andrico for keeping things ticking along.
