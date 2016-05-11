#!/bin/bash

#load parent deploy
deploy/deploy.sh

#Init webpack loader for dev env.
node server.js
npm run dev
