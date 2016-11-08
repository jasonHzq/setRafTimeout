# setRafTimeout

setRafTimeout is equal with setTimout totally but has one feature:

[![npm version](https://badge.fury.io/js/setRafTimeout.png)](https://badge.fury.io/js/setRafTimeout)
[![build status](https://travis-ci.org/jasonHzq/setRafTimeout.svg)](https://travis-ci.org/jasonHzq/setRafTimeout)
[![npm downloads](https://img.shields.io/npm/dt/setRafTimeout.svg?style=flat-square)](https://www.npmjs.com/package/setRafTimeout)
[![Gitter](https://badges.gitter.im/jasonHzq/setRafTimeout.svg)](https://gitter.im/jasonHzq/react-smooth?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

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
