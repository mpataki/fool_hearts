#!/usr/bin/env bash

SITE=${1:-foolhearts.com}
CLOUDFRONT_DISTRIBUTION_ID="E1ARI07KGL1HUE"

# Legacy S3 deploy. Site files live in public/ (served by Workers Static Assets);
# syncing that directory keeps this script correct until it is retired.
echo "Starting deploy to S3..."
aws s3 sync --delete public/ s3://$SITE \
    --region "us-east-1" \
    --exclude ".DS_Store" \
    --exclude ".assetsignore"

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
