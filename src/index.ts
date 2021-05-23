import pdf, { CreateOptions } from "html-pdf";
import fs from 'fs';

var html = fs.readFileSync('./templates/tpl-1.html', 'utf8');


const options: CreateOptions = {
  format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
  orientation: "portrait", // portrait or landscape
  border: {
    top: "50px", // default is 0, units: mm, cm, in, px
    right: "2px",
    bottom: "20px",
    left: "15px",
  },
};

pdf
  .create(html, options)
  .toFile("./pdf/6-a4-p-border-top-50-title-blue.pdf", function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
