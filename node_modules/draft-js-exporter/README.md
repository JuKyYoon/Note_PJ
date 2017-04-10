# draft-js-exporter
A module to export and format the content from the React Draft.js framework.

**NOT YET ON npm coming soon**

This is an early version of an export module.
The goal is to provide a modular structure to select the format to export.

Actually there is an early HTML formatter that support `BOLD` and `ITALIC` inline styles.
It automatically wraps the block inside a `p` element if the `type` of the block is `unstyled`.

# Install 
`npm i draft-js-exporter`

# Usage

````
  var DraftExporter = require('draft-js-exporter');
  
  
  var rawDraftContentBlock = Draft.convertToRaw(contentState);
  var exporter = new DraftExporter(rawDraftContertBlock);
  var contentExported = exporter.export();
  
````
