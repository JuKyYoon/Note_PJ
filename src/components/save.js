var DraftExporter = require('draft-js-exporter');
  
  
var rawDraftContentBlock = Draft.convertToRaw(contentState);
var exporter = new DraftExporter(rawDraftContertBlock);
var contentExported = exporter.export();