# LazyImages Plugin #

**VERY** simple image lazy-loader using `node-scroll-info` for positional information.

## Usage ##

This plugin is designed to be plugged-into a `Y.Node` instance.

```javascript
Y.one(".images").plug(Y.Plugins.LazyImages);
```
    
As the user scrolls the plugged node,images that have a `data-src` value will have that converted to their `src` value, causing them to be loaded.

You can configure the distance from the viewport to preload nodes by setting the plugin's `distance` attribute. The default is 100px.

## Example ##

```javascript
YUI().use("plugin-lazy-images", function(Y) {
    Y.one("body").plug(Y.Plugins.LazyImages);
});
```

See http://jsbin.com/wumu/2 for a live example.

## License ##

```
Copyright (c) 2014 Patrick Cavit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
