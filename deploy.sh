#!/usr/bin/env bash

SITE=$1

echo "Starting deploy"
aws s3 sync . s3://$SITE --region "us-east-1" --exclude ".git/*" --exclude ".gitignore" --exclude ".DS_Store" --exclude "bower.json" --exclude "README.md" --exclude "circle.yml"
exit $?
