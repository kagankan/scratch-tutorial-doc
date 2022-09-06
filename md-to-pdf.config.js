module.exports = {
  stylesheet: "./src/style.css",
  pdf_options: {
    format: "A4",
    margin: "10mm 10mm 20mm",
    printBackground: true,
    headerTemplate: /* html */ `
        <style>
          section {
            margin: 0 auto;
            font-family: system-ui;
            font-size: 11px;
          }
        </style>
        <section>
          <span class="title"></span>
          <span class="date"></span>
        </section>
        `,
    footerTemplate: /* html */ `
        <section>
          <div>
            Page <span class="pageNumber"></span>
            of <span class="totalPages"></span>
          </div>
        </section>
        `,
  },
  marked_options: { breaks: true },
};
