# bizzi-graphql
## Prerequisite

- Node: >=12.18.4
- Yarn: 1.22.10

## Option

- Use ESLint on VSCode
- Use Prettier on VSCode
- Install eslint: `yarn global add eslint`
- Install prettier: `yarn global add prettier`

## Install package

Run cmd: `yarn run package`

## Developer:

Run cmd: `yarn dev`

## Build:

Run cmd: `yarn build`

## CI-CD

### Install heroku and login

```shell
$ brew tap heroku/brew && brew install heroku
```

refs: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

### Login heroku

```shell
heroku login
```

### CircleCI

### Login CircleCI

- Access link [CircleCI](https://circleci.com/vcs-authorize/) and login Github

### Setting project in CircleCI

- Click `Projects side tab` > click `Set up projects.` button

- Select a config.yml file with option `If you already have .circleci/config.yml...`

- Type branch `main` and click `Let's go` button

### CircleCI Environment Variables

- Open the CircleCI and select project settings > Environment Variables

- Add environment variables to define where the Heroku application can be found and a token to provide access.

|Environment |Variable Value|
|HEROKU_API_KEY |API key found in Account Settings > API Key|
|HEROKU_APP_NAME|name of the application created on Heroku|

refs: [Heroku Orb](https://circleci.com/developer/orbs/orb/circleci/heroku)
