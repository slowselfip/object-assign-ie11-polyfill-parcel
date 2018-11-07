This project is created to demonstrate a bug that occurs when trying to make parcel use the `useBuiltIns: 'usage'` setting to build with target ie 11.

In the source code a call to Object.assign() is made. The babel-env configuration is made such that it should detect the usage of this unsuported feature and add a polyfill for it.

To build using parcel:
```
npm run build:parcel
```

To build using webpack:
```
npm run build:webpack
```

Both builds outputs to the `dist/` folder. Host dist and access it with some evergreen browser. Do the same with Internet Explorer 11.