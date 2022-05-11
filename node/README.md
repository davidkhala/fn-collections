# `fn-node`
docker Releases
- `docker pull ghcr.io/davidkhala/fn-node`

## Debug
```
echo -n '{"input-key":"data"}' | DEBUG=1 fn --verbose invoke <application-name> <function-name>
```

### Deploy from local to oci
```
fn create context ap-singapore-1 --provider oracle
fn use context ap-singapore-1
fn update context oracle.compartment-id ocid1.tenancy.oc1..aaaaaaaaji4ohhurx2uydbjbvd2skio5ad5tp2nvu4azii2oy5tu5aol4phq
fn update context api-url https://functions.ap-singapore-1.oraclecloud.com
fn update context registry sin.ocir.io/cn9yc2hk0gzg/fn-node
```
Log into the Registry using the OCI Auth Token as your password
```
docker login -u 'cn9yc2hk0gzg/davidkhala@gmail.com' sin.ocir.io
```
Verify your setup by listing applications in the compartment
```
fn list apps
```

Then ready to deploy
```
fn deploy --app default
fn invoke default fn-node
```
