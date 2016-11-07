# setRafTimeout

setRafTimeout is equal with setTimout totally but has one feature:

* The callback function in setRafTimeout won't be called When the current broswer tab cannot be seen.

## usage

```
$ npm i -S setRafTimeout
```

## docs

### setRafTimeout

```
import setRafTimeout, { clearRafTimeout } from 'setRafTimeout';

const timeId = setRafTimeout(callback, timeout);

clearRafTimeout(timeId);
```

### setRafInterval

```
import { setRafInterval, clearRafInterval } from 'setRafTimeout';

const timer = setRafInterval(callback, timeout);

clearRafInterval(timer);
```
