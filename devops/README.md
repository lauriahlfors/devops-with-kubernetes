# Exercise 1.1

### Instructions to run the app

Create deployment

```bash
kubectl create deployment app --image=lauriahlfors/devops-with-kubernetes:1.1
```

Or replace deployment with:

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
