gcloud container clusters create code-cooking --scopes https://www.googleapis.com/auth/cloud_debugger --num-nodes=1 --project=code-cooking

gcloud container clusters get-credentials code-cooking --zone europe-west1-d --project code-cooking

docker build -t eu.gcr.io/code-cooking/debugging-demo:0.1 .

gcloud docker -- push eu.gcr.io/code-cooking/debugging-demo:0.1

kubectl apply -f k8s
