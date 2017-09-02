# Stackdriver debugger demo
See https://cloud.google.com/debugger/docs/setup/nodejs

## Setup
Create a cluster and connect to it:

    gcloud container clusters create code-cooking --scopes https://www.googleapis.com/auth/cloud_debugger --num-nodes=1 --project=code-cooking

    gcloud container clusters get-credentials code-cooking --zone europe-west1-d --project code-cooking

Build and push the Docker container:

    docker build -t eu.gcr.io/code-cooking/debugging-demo:0.1 .

    gcloud docker -- push eu.gcr.io/code-cooking/debugging-demo:0.1

Deploy to Kubernetes:

    kubectl apply -f k8s

Debug:

    open https://console.cloud.google.com/debug?project=code-cooking