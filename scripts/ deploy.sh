#!/user/bin/env bash
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "first commit" &&
git remote add orgin git@github.com:Hsy1998/react-money-page.git &&
git push -u orgin master -f 
cd ..