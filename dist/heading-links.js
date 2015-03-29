'use strict';

// CONSTRUCTOR

function HeadingLinks( options ) {
  // defaults
  this._selector       = options.selector || 'h1, h2, h3';
  this._hoverLinks     = options.hoverLinks !== false;
  this._linksAttr      = options.linksAttr || 'data-heading-link';

  // headings vars
  this._headings       = document.querySelectorAll(this._selector);
  this._headingsLength = this._headings.length;

  // cache context for handlers
  var self = this;

  // mouse enter handler
  this._hoverLinkMouseEnter = function( event ) {
    // get heading that was hovered on
    var heading = event.target;

    // save heading id
    var headingID = heading.id;

    // create link
    var link = document.createElement('a');

    // add link href attribute
    var linkUrl = '#' + headingID;
    link.setAttribute('href', linkUrl);
    link.setAttribute(self._linksAttr, '');

    // append link to heading
    heading.appendChild(link);
  }

  // mouse leave handler
  this._hoverLinkMouseLeave = function( event ) {
    // get heading that was hovered on
    var heading = event.target;

    // get the children
    var children = heading.children;

    // cache children length
    var childrenLength = children.length;

    // loop through children
    for(var index = 0; index < childrenLength; index++) {
      // remove only the link with heading
      if(children[index].hasAttribute(self._linksAttr)) {
        children[index].parentNode.removeChild(children[index]);

        // stop after we find it
        break;
      }
    }
  }

  // call to create
  document.addEventListener('DOMContentLoaded', this.create(), false);
}

// METHODS

HeadingLinks.prototype.create = function() {
  // loop through headings
  for(var index = 0; index < this._headingsLength; index++) {
    // get node
    var element = this._headings[index];

    // get heading text
    var elementText = element.textContent;

    // convert text to kebab-case
    elementText = elementText.toLowerCase()                 // convert to lower case
                             .replace(/[^\w\s]/gi, '')      // remove special chars, but preserve spaces
                             .replace(/\s+/g, '-')          // replace spaces with dashes
                             .replace(/\_+/g, '');          // remove underscores

    // add id attribute to element
    element.setAttribute('id', elementText);
  }

  // optionally bind hover handler
  if(this._hoverLinks)
    this.bindHoverLinks();
}

HeadingLinks.prototype.destroy = function() {
  // loop through headings
  for(var index = 0; index < this._headingsLength; index++) {
    // remove id attribute
    this._headings[index].removeAttribute('id');
  }
}

HeadingLinks.prototype.bindHoverLinks = function() {
  // loop through headings
  for(var index = 0; index < this._headingsLength; index++) {
    // bind hover events
    this._headings[index].addEventListener('mouseenter', this._hoverLinkMouseEnter);
    this._headings[index].addEventListener('mouseleave', this._hoverLinkMouseLeave);
  }
}

HeadingLinks.prototype.unbindHoverLinks = function() {
  // loop through headings
  for(var index = 0; index < this._headingsLength; index++) {
    // unbind hover events
    this._headings[index].removeEventListener('mouseenter', this._hoverLinkMouseEnter);
    this._headings[index].removeEventListener('mouseleave', this._hoverLinkMouseLeave);
  }
}

HeadingLinks.prototype.getList = function() {
  return this._headings;
}
