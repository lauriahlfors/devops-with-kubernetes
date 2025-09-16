Create deployment

```bash
kubectl create deployment app --image=lauriahlfors/devops-with-kubernetes:1.2
```

Or replace deployment with:

```bash
kubectl set image deployments/app app=lauriahlfors/devops-with-kubernetes:1.2
```

```bash
kubectl get pods
```

```bash
kubectl logs -f pod-name
```
