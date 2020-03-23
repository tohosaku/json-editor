#!/bin/sh

chmod 600 ~/.ssh/id_rsa
echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

git remote add docs git@github.com:tohosaku/tohosaku.github.io.git
git subtree --prefix=docs push docs master
