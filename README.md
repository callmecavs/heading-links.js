# heading-links.js

Inspiration: [https://twitter.com/_dte/status/580873945580109824](https://twitter.com/_dte/status/580873945580109824)

A small (< 1kb minified), dependency-free library for deep linking headings.  It does so by taking their content, parsing it into URL format, and then adding ID attributes.

## Usage

Add the script to your HTML.

```html
<script src="heading-links.min.js"></script>
```

Create a new instance with your desired options.  Defaults shown below.

```javascript
var headingLinks = new HeadingLinks({
  selector: 'h1, h2, h3'
});
```

## API

### HeadingLinks(options)

Create a new instance of `HeadingLinks`.

### Create

Adds ID attributes based on the provided `selector`.

```
headingLinks.create();
```

### Destroy

Removes ID attributes based on the provided `selector`.

```
headingLinks.destroy();
```
