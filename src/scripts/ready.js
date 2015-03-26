'use strict';

// CONSTRUCTOR

function HeadingLinks( options ) {
  // status
  this._status         = true;

  // selector defaults
  this._selector       = options.selector || 'h1, h2, h3';
  this._headings       = document.querySelectorAll(this._selector);
  this._headingsLength = this._headings.length;

  // link defaults
  this._case     = options.case || 'kebab-case';

  // call to create
  document.addEventListener('DOMContentLoaded', this.create(), false);
}

// METHODS

HeadingLinks.prototype.status = function() {

}

HeadingLinks.prototype.create = function() {
  // loop through headings
  for(var index = 0; index < this._headingsLength; index++) {
    // get node
    var element = this._headings[index];

    // get heading text
    var elementText = element.textContent;

    // convert to desired link case
    switch(this._case) {
      case 'kebab-case':
        elementText = elementText.toLowerCase()                 // convert to lower case
                                 .replace(/[^\w\s]/gi, '')      // remove special chars, but preserve spaces
                                 .replace(/\s+/g, '-');         // replace spaces with dashes
      break;
    }

    // add id attribute
    this._headings[index].setAttribute('id', elementText);
  }
}

HeadingLinks.prototype.destroy = function() {
  // loop through headings
  for(var index = 0; index < this._headingsLength; index++) {
    // remove id attribute
    this._headings[index].removeAttribute('id');
  }
}
