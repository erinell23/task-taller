# task-taller

# instalar dependencias
```
npm install
```

# subir archivo a S3
- comprimir archivo en task-back.zip
- subir a s3
```
aws s3 cp /task-back.zip s3://taller-utp-aws-erinell/task/

```
# desplegar 
```sh
aws cloudformation deploy \
  --stack-name back-taller \
  --template-file template.yml \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides S3Deploy=nombre-s3-de-despliegue

```
> ⚠️ **Nota: **Remplazar valor nombre-s3-de-despliegue por el nombre de tu s3


