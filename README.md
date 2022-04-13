# fn-collections
FN monorepo

## Install
```
curl -LSs https://raw.githubusercontent.com/fnproject/cli/master/install | sh
```


## Debug
echo -n '{"input-key":"data"}' | DEBUG=1 fn --verbose invoke <application-name> <function-name>

