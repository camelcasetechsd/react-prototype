#!/bin/bash

#load parent deploy
deploy/deploy.sh

#Init webpack loader for prod env.
npm run prod
