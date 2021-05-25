import Twig from "twig";
import pdf, { CreateOptions } from "html-pdf";

import api_data from './data/breaking-bad-data.json';
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
const data: any = { baked_good: "bar", users: [
    {username: 'Anartz', age: 35}, {username: 'Prueba', age: 33}
],  characters: api_data};
Twig.renderFile("./src/templates/tpl-1.twig", data, (_, html) => {
  console.log(html);
  html; // compiled string
  pdf
    .create(html, options)
    .toFile("./pdf/twig-for.pdf", function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
});
