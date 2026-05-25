#!/bin/bash
# Generates public/Thomas_Tsangou_Resume.pdf from public/Thomas_Tsangou_Resume.md
# Requires: pandoc, pdflatex (texlive)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

pandoc "$SCRIPT_DIR/public/Thomas_Tsangou_Resume.md" \
  -o "$SCRIPT_DIR/public/Thomas_Tsangou_Resume.pdf" \
  --pdf-engine=pdflatex \
  -V geometry:"top=0.4in,bottom=0.4in,left=0.5in,right=0.5in" \
  -V fontsize=8pt \
  -V pagestyle=empty \
  -V "header-includes=\\usepackage{setspace}\\setstretch{0.9}\\usepackage{enumitem}\\setlist[itemize]{noitemsep,topsep=2pt,parsep=0pt,partopsep=0pt}\\setlist[enumerate]{noitemsep,topsep=2pt}" \
  && echo "PDF generated: public/Thomas_Tsangou_Resume.pdf"
