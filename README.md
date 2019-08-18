Typescript Electron "webpack-dev-server" Hello World Demo
=========================================================

可以利用webpack-dev-server自动刷新页面。

## 几个注意点：

### webpack + electron-debug时的warning

在webpack中使用electron-debug时，会因为electron-debug中的dynamic import而导致下面的warning：

```
WARNING in ./node_modules/electron-debug/index.js 96:45-58
Critical dependency: the request of a dependency is an expression
 @ ./src/main/index.ts
```

目前还没有找到好办法解决它，好在它不影响使用，此处只是一个提示。

### mainProcessConfig.ts:

```
webPreferences: {
  nodeIntegration: true,
}
```

否则，将会出现`Uncaught ReferenceError: require is not defined`


```
npm install
npm run dev
```

