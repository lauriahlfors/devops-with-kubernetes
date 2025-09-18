# Exercise 1.3

### Instructions to run the app

Apply deployment manifest

```bash
kubectl apply -f devops/manifests/deployment.yaml
```

Get names of pods

```bash
kubectl get pods
```

See logs of the updated pod

```bash
kubectl logs -f <pod-name>
```
