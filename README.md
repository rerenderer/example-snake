# Snake

## Usage

For starting dev server run:

```bash
rlwrap lein figwheel
```

For building production js:

```bash
lein cljsbuild once
```

For building Android version:

```bash
cd android 
./gradlew copyAssets installDebug
```

## License MIT

