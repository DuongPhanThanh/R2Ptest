# Getting Started

## Prerequisites

Install i18nexus-cli for ensuring localization always be up-to-date (For development)

```bash
npm install -g i18nexus-cli
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development note

    - The app is using Redux for state management. It's not recommened for using ContextAPI/useContext hooks for maintaining the consistent.
    - The source has been configured with the auto format on saving for VSCode following the defined code styling. Hence VSCode is recommended.

**Before commit your code** : run the following command to make sure your code has been formated and no unit test failed.

```
yarn prettier

yarn lint

yarn test

```

## Team flow

#### You can use command or any tool with GUI. My recommendation is Sourcetree.

**master** is the production state

    - gets tagged only (e.g. 2021.8.0, 2021.8.1, 2021.8.2, ….)
    - Format is: YYYY.M.V (V = 0,1,2,3,4…..)

**dev** is the development state

    - get rebased on features git checkout feature/NAME && git rebase origin/dev && git push -f

**hotfix**/ branches are for urgent fixes in releases

    - create from release git checkout -b hotfix/NAME release/NAME

    - merge back to release git checkout release/NAME && git merge --no-ff hotfix/NAME

**feature**/ branches (shown as “feature” in Bitbucket and Jira) are for development purpose (new dev-subtasks in stories, dev-tasks or in rare cases even stories directly)

    - create from dev git checkout -b feature/NAME origin/dev

    - merge back to dev (only with approved pull request) git checkout dev && git merge --no-ff feature/NAME

**bugfix**/ branches are for development purpose (bugfixes)

    - create from dev git checkout -b feature/NAME origin/dev

    - merge back to dev (only with approved pull request) git checkout dev && git merge --no-ff feature/NAME

**release**/ branches are releases (exists until next release created)

    - create from dev git checkout -b release/NAME origin/dev

    - merge back to dev (if hotfix made) git checkout dev && git merge --no-ff release/NAME

    - merge back to master and tag new production version git checkout master && git merge --no-ff release/NAME && git tag -a RELEASE && git push origin RELEASE
