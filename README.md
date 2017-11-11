## Walmart Test

### Requirements

Node 7 or above.

### Configuration

In the file `./config/index.js` you can modify the currencies that are being used on the test. By default, it's configured to show the values of `BTC`, `ETH`, and `DASH` in `USD`.

### Installing dependencies

```
npm install
```

You can review the test in **production mode (recommended)** or **development mode**.

### Production mode

```
npm run build && npm run start
```

And then you can go to `http://localhost:8080`

### Development mode

```
npm run dev
```

And in another terminal tab we should run:

```
npm run start
```
