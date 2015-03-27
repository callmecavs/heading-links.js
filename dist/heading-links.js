'use strict';

// CONSTRUCTOR

function HeadingLinks( options ) {
  // defaults
  this._selector       = options.selector || 'h1, h2, h3';
  this._hoverLinks     = options.hoverLinks || true;

  // headings vars
  this._headings       = document.querySelectorAll(this._selector);
  this._headingsLength = this._headings.length;

  // hover handlers
  this._hoverLinkMouseEnter = function() {

  }

  this._hoverLinkMouseLeave = function() {

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
