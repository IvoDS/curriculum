#!/bin/bash

# Deployment script for Ivan De Stefani Portfolio

# Load environment variables
if [ -f deploy.env ]; then
    export $(grep -v '^#' deploy.env | xargs)
else
    echo "Error: deploy.env file not found."
    exit 1
fi

# Check for required variables
if [ -z "$DEPLOY_USER" ] || [ -z "$DEPLOY_HOST" ] || [ -z "$DEPLOY_PATH" ]; then
    echo "Error: Missing deployment variables in deploy.env."
    exit 1
fi

echo "--- Starting Deployment [IDS_SYSTEM_v2.0] ---"

# Step 1: Build the project
echo "Step 1: Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed. Aborting deployment."
    exit 1
fi

# Step 2: Upload to server
echo "Step 2: Uploading 'dist' to $DEPLOY_HOST..."
# Using rsync for efficient transfer
rsync -avz --delete dist/ $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH

if [ $? -eq 0 ]; then
    echo "--- Deployment Successful [SYSTEM_ONLINE] ---"
else
    echo "Deployment failed during transfer."
    exit 1
fi
