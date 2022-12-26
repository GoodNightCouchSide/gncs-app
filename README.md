# Good Night Couch Side

## Table of contents

- [Good Night Couch Side](#good-night-couch-side)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Development](#development)
    - [Branch prefixes](#branch-prefixes)
    - [Project folder structure](#project-folder-structure)
    - [Node Environments and gncs Service URLs](#node-environments-and-gncs-service-urls)
    - [General dev guidelines](#general-dev-guidelines)
  - [Code formatting and linting](#code-formatting-and-linting)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [License](#license)

## Installation

Before you get started make sure to have your local couchdb admin credentials (the ones that you
need to log into Fauxton CouchDB at http://localhost:5984/\_utils/#login) in place. For convenience
create the file .env in the project root and add your credentials as
COUCH_URL=http://admin:password@localhost:5984 there.

Clone the repo and run

```bash
npm install
```

Run the app via

```bash
npm start
```

and have fun on [http://localhost:3000](http://localhost:3000).

## Development

### Branch prefixes

- `feature/`
- `bugfix/`
- `release/`
- `hotfix/`
- `support/`  
  Version tag prefix? []

### Project folder structure

This [tutorial](https://blog.webdevsimplified.com/2022-07/react-folder-structure/) was used to
create this folder structure.

- `public` <br> _All static content goes in there_
- `src`

  - `assets`
    - `images`
    - `scss`
  - `components` <br> _In this ui folder which contains all our UI components like buttons, modals,
    cards, etc. We also have a form folder for form specific controls like checkboxes, inputs, date
    pickers, etc._

    _You can customize and breakdown this components folder however you see fit based on your
    project needs, but ideally this folder shouldn't get too large as many of your more complex
    components will be stored in the features folder._

  - ~~`context`~~ <br> _This project does not need context because used as global state store redux_

  - `features` <br> _This folder group all the features. Already this is easier to understand as a
    developer since in 90% of cases when you are going to add new code to a project you are either
    going to implement a new feature, such as adding user accounts, or you are going to modify an
    existing feature, such as adding the ability to edit todos._

  - `hooks` <br> _To storing every hook in your application it will only store the global hooks that
    are used across multiple features._
  - `layouts`<br> _This is just a special folder for placing any layout based components. This would
    be things like a page layout,sidebar, navbar, container, etc._

  - `lib` <br> _This folder contains facades for the various different libraries you use in your
    project._

    _Doing this makes is much easier to update, and replace libraries when all the library specific
    code is in one place in your application. It also makes it easier to customize third party
    libraries to your own need._

  - `pages` _This folder now only contains one file per page and the reason for this is that all the
    logic for the features on the pages are in the features folder. This means that the files in the
    pages folder are actually quite simple, just glue together a few feature components and some
    general components._

  - `utils` <br> _This folder is for storing all utility functions such as formatters. This is a
    pretty straightforward folder and all the files in this folder should likewise be
    straightforward. I generally like to only store pure functions in this folder since if a utility
    function has side effects then it is most likely not just a simple utility function._

### Node Environments and gncs Service URLs

- development: http://localhost:3000
- staging: https://stage.gncs.app
- production: https://gncs.app

### General dev guidelines

To report a bug or request a feature, please file a
[new issue](https://github.com/GoodNightCouchSide/gncs/issues/new/choose). Please check current
issues to see if someone has filed something similar. To submit a patch, please create a
[create a pull request](https://github.com/GoodNightCouchSide/gncs/pulls).

Make sure to use
[Commit Message Conventions (ACMC)](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

## Code formatting and linting

To run the code formatting tool:

```bash
$ npm run format
```

This will cause [ESLint](https://eslint.org/) to automatically fix any code correctness issues.

To run the linting checks:

```bash
$ npm run lint
```

This will not attempt any automatic fixes, which is preferable during test runs.

## Testing

We are planning to test our app with Jest

## Deployment

## License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
