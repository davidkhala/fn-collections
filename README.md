# fn-collections
FN monorepo

fn use func.yaml instead of Dockerfile to feed metadata
## Install fn
```
curl -LSs https://raw.githubusercontent.com/fnproject/cli/master/install | sh
```

## Debug
```
echo -n '{"input-key":"data"}' | DEBUG=1 fn --verbose invoke <application-name> <function-name>
```