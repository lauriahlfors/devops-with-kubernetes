# Exercise 1.4

### Instructions to run the app

Create deployment

```bash
kubectl apply -f devops/manifests/deployment.yaml
```

Get pod names

```bash
kubectl get pods
```

See that the app is running via pod logs

```bash
kubectl logs -f <pod-name>
```
