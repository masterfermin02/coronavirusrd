#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.coronavirus-rd.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>.github.io.git master

# if you are deploying to git
git push -f git@github.com:masterfermin02/coronavirusrd.git master:gh-pages

cd -

# remove dist folder after install
rm -r dist
