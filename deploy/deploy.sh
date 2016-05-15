#!/bin/bash

#Install npm
npm update npm
npm install

#Install compass
sudo gem install compass

#Compass compile scss to css
compass compile
