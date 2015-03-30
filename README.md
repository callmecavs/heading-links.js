# heading-links.js

Inspiration: [https://twitter.com/_dte/status/580873945580109824](https://twitter.com/_dte/status/580873945580109824)

**A small (< 2kb minified), dependency-free library for deep linking headings - GitHub style.** It does so by taking a headings text content, parsing it into URL format, adding an ID attribute, and inserting a link that appears on hover.

## Demo

[Download](https://github.com/callmecavs/heading-links/archive/master.zip) the repo, unzip it, and check out `demo.html`.

## Usage

Load the stylesheet.

```html
<!-- only if hover links are enabled -->

<link rel="stylesheet" href="heading-links.min.css">
```

Load the script.

```html
<script src="heading-links.min.js"></script>
```

Create a new instance with your desired options. Defaults shown below.

```javascript
var headingLinks = new HeadingLinks({
  // options here, defaults shown below

  selector: 'h1, h2, h3',
  hoverLinks: true,
  hoverHeadingAttr: 'data-heading',
  hoverLinkAttr: 'data-heading-link'
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

Adds ID attribute to headings, based on the `selector`.

```javascript
headingLinks.create();
```

> This method is called automatically when creating a new instance.

### .destroy()

Removes ID attribute from headings, based on the `selector`.

```javascript
headingLinks.destroy();
```

### .addHoverLinks()

Inserts hover links into headings, based on the `selector`.

```javascript
headingLinks.addHoverLinks();
```

> This method is called automatically when creating a new instance if hover links are enabled.

### .removeHoverLinks()

Removes hover links from headings, based on the `selector`.

```javascript
headingLinks.removeHoverLinks();
```

### .getList()

Returns a NodeList of all headings matched by the `selector` for this instance.

```javascript
var listOfHeadings = headingLinks.getList();
```

## License

MIT. &copy; Michael Cavalea.
