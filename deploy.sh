#!/usr/bin/env bash

echo "Starting deploy"
aws s3 sync . s3://foolhearts.com/ --region "us-west-2" --exclude ".git/*" --exclude ".gitignore" --exclude ".DS_Store" --exclude "bower.json" --exclude "README.md" --exclude "circle.yml"
exit $?
