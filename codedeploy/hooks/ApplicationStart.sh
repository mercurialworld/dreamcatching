#!/bin/bash
set -euox pipefail

cd /var/lib/codedeploy-apps/dreamcatching

if ! docker compose up --detach --wait --wait-timeout 120 ; then
    docker compose logs
    exit 1
fi