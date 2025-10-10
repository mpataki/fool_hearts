#!/usr/bin/env bash

SITE=${1:-foolhearts.com}
CLOUDFRONT_DISTRIBUTION_ID="E1ARI07KGL1HUE"

echo "Starting deploy to S3..."
aws s3 sync --delete . s3://$SITE \
    --region "us-east-1" \
    --exclude ".git/*" \
    --exclude ".gitignore" \
    --exclude ".DS_Store" \
    --exclude "bower.json" \
    --exclude "README.md" \
    --exclude "circle.yml" \
    --exclude "CLAUDE.md" \
    --exclude "deploy.sh"

if [ $? -eq 0 ]; then
    echo "S3 sync complete. Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*"
    exit $?
else
    echo "S3 sync failed"
    exit 1
fi
