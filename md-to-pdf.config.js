module.exports = {
  stylesheet: "./src/style.css",
  pdf_options: {
    format: "A4",
    margin: "10mm 10mm 16mm",
    printBackground: true,
    headerTemplate: /* html */ `
        <style>
          section {
            margin: 0 auto;
            font-family: system-ui;
            font-size: 11px;
          }
        </style>
        `,
        // <section>
        //   <span class="title"></span>
        //   <span class="date"></span>
        // </section>
    footerTemplate: /* html */ `
        <section>
          <div>
            <span class="pageNumber"></span>
          </div>
        </section>
        `,
        // <span class="totalPages"></span>
  },
  marked_options: { breaks: true },
};
