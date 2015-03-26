# heading-links.js

Inspiration: [https://twitter.com/_dte/status/580873945580109824](https://twitter.com/_dte/status/580873945580109824)

**A small (< 1kb minified), dependency-free library for deep linking headings.** It does so by taking their content, parsing it into URL format, and then adding ID attributes.

## Demo

[Download](https://github.com/callmecavs/heading-links/archive/master.zip) the repo, unzip it, and check out `demo.html`.

## Usage

Include the script in your HTML.

```html
<script src="heading-links.min.js"></script>
```

Create a new instance with your desired options. Defaults shown below.

```javascript
var headingLinks = new HeadingLinks({
  selector: 'h1, h2, h3'
});
```

## API

### HeadingLinks(options)

Create a new instance of `HeadingLinks`.

```javascript
var headingLinks = new HeadingLinks({
  // options here
});
```

### .create()

Adds ID attributes, for deep linking, based on the `selector` provided for this instance.

```javascript
headingLinks.create();
```

> This method is called automatically when creating a new instance.

### .destroy()

Removes ID attributes, for deep linking, based on the `selector` provided for this instance.

```javascript
headingLinks.destroy();
```

### .getList()

Returns a NodeList of all headings matched by the `selector` for this instance.

```javascript
var listOfHeadings = headingLinks.getList();
```

## License

MIT. &copy; Michael Cavalea.
