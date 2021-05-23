import pdf, { CreateOptions } from "html-pdf";

const content = `
<h1>Título en el PDF creado con el paquete html-pdf</h1>
<p>Generando un PDF con un HTML sencillo</p>
`;

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
  .create(content, options)
  .toFile("./pdf/4-example-a4-p-border-top-50.pdf", function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
