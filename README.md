# fn-collections
FN monorepo

## Install fn
```
curl -LSs https://raw.githubusercontent.com/fnproject/cli/master/install | sh
```

## `fn-node`
Releases
- `docker pull ghcr.io/davidkhala/fn-node`

## Debug
echo -n '{"input-key":"data"}' | DEBUG=1 fn --verbose invoke <application-name> <function-name>

