import pdf, { CreateOptions } from "html-pdf";
import fs from 'fs';
var html = fs.readFileSync('./tpl/tpl-3-portrait-tabloid.html', 'utf8');

const options: CreateOptions = {
    "format": "Tabloid",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "orientation": "portrait", // portrait or landscape
}

pdf.create(html, options).toFile("./pdf/7-html-pdf.pdf", function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
