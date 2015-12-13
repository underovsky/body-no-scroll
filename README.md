# Body no-scroll
Sometimes you are so annoyed with browsers non-standard behaviours that you write a JS plugin. This simple piece of code blocks the scrolling of body while opening modals or overlays. It also saves scroll position.

## Use
Include the plugin file (`bns.js`). To turn no-scroll on/off use these methods.

```
BNS.on(); // I just opened a modal and want background to be non-scrollable
BNS.off(); // Okay, back to standard view
```

You can also apply your own classes to body each time you call on/off.

```
BNS.set({
	classes: 'one two three'
});

BNS.on(); // Now body has classes 'one two three'
BNS.off(); // Classes removed
```

## Browser support
Tested and working:
* Firefox,
* Chrome/Chromium,
* Opera (on Presto),
* Opera (on Blink),
* IE (11, 10, 9),
* Safari,
* BlackBerry Browser (Webkit).

I would really appreciate feedback from Android and iOS browsers.

## Known issues
On some mobile browsers you may see a quick jump while applying on/off.

## About the author
* [underovsky.com](http://underovsky.com)
* [twitter.com/underovsky](https://twitter.com/underovsky)
* [facebook.com/underovsky](https://facebook.com/underovsky)

##License
The MIT License (MIT)

Copyright (c) 2015 Krzysztof Rusnarczyk
