# listr-verbose-renderer [![Build Status](https://travis-ci.org/SamVerschueren/listr-verbose-renderer.svg?branch=master)](https://travis-ci.org/SamVerschueren/listr-verbose-renderer)

> [Listr](https://github.com/SamVerschueren/listr) verbose renderer

<img src="screenshot.gif" />


## Install

```
$ npm install --save listr-verbose-renderer
```


## Usage

```js
const VerboseRenderer = require('listr-verbose-renderer');
const Listr = require('listr');

const list = new Listr([
	{
		title: 'foo',
		task: () => Promise.resolve('bar')
	}
], {
	renderer: VerboseRenderer
});

list.run();
```

> Note: This renderer supports non-TTY environments.


## Options

These options should be provided in the [Listr](https://github.com/SamVerschueren/listr) options object.

### dateFormat

Type: `string` `false`<br>
Default: `HH:mm:ss`

Format of the rendered timestamp. Use the [date-fns string format](https://date-fns.org/docs/format). If `false` is passed in, the timestamp will be hidden.


## Related

- [listr](https://github.com/SamVerschueren/listr) - Terminal task list
- [listr-update-renderer](https://github.com/SamVerschueren/listr-update-renderer) - Listr update renderer
- [listr-silent-renderer](https://github.com/SamVerschueren/listr-silent-renderer) - Suppress Listr rendering output


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-listr-verbose-renderer?utm_source=npm-listr-verbose-renderer&utm_medium=referral&utm_campaign=enterprise&utm_term=repo">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
