import pdf, { CreateOptions } from 'html-pdf';

const content = `
<h1>Título en el PDF creado con el paquete html-pdf</h1>
<p>Generando un PDF con un HTML sencillo</p>
`;

const options: CreateOptions = {
    "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "orientation": "portrait", // portrait or landscape
};

pdf.create(content, options).toFile('./pdf/2-example-a4-p.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
});