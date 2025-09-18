# Exercise 1.2

### Instructions to run the app

Create deployment

```bash
kubectl create deployment <app-name> --image=lauriahlfors/devops-with-kubernetes:1.2
```

Or replace deployment image with:

```bash
kubectl set image deployments/<app-name> <app-name>=lauriahlfors/devops-with-kubernetes:1.2
```

Get pod names

```bash
kubectl get pods
```

See that the app is running via pod logs

```bash
kubectl logs -f <pod-name>
```
