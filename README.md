# QA Wolf Demo

This is a demo and online tutorial on how to use [QA Wolf](https://qawolf.com), a new test automation framework built on the [Playwright](https://playwright.dev/) API.

We're going to create a Next.js app using [Vercel](https://vercel.com/download), add QA Wolf and then run the QA Wolf tests in CI using Github Actions.

This project assumes some knowledge of the command line and a Github account (though is not required for all sections).

## Getting Started

1. Install [vercel cli](https://vercel.com/download) - `npm i -g vercel` 
2. vercel init nextjs [your-test-project-name]
![](vercel-init.gif)
3. cd nextjs
4. npm install
5. npm run dev
6. npm init qawolf
7. npx qawolf create http://localhost:3000 firstTest

## QA Wolf

This repo uses [QA Wolf](https://docs.qawolf.com/docs/what_is_qa_wolf) for e2e testing.

`npx qawolf test`

The repo uses Github actions to run the e2e tests on every build.
