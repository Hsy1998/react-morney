#!/usr/bin/env/ bash

yarn build &&
cd build &&
gut init &&
git add . &&
git commit -m 'deploy' &&
git branch -M main &&
git remote add origin git@github.com:Hsy1998/React-Pocket-book.git &&
git push -u origin main &&
cd -