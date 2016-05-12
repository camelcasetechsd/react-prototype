#!/bin/bash

#load parent deploy
deploy/deploy.sh

#Init webpack loader for dev env.
NODE_ENV=development node webpackDevServer.js
npm run dev
