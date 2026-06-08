#!/bin/bash
# Install entr if not present: sudo apt install entr
# To run this in the background: nohup ./generate-pdf.sh --watch &

WATCH_FILE="public/Thomas_Tsangou_Resume.md"
OUTPUT_FILE="public/Thomas_Tsangou_Resume.pdf"

generate() {
  echo "Generating PDF from $WATCH_FILE..."
  # Reverting parskip to 4pt as requested
  pandoc "$WATCH_FILE" \
    -o "$OUTPUT_FILE" \
    --pdf-engine=pdflatex \
    -V documentclass=scrartcl \
    -V classoption=10pt \
    -V pagestyle=empty \
    -M compact-title=true \
    -V "header-includes=\\usepackage{mathptmx}\\usepackage[top=0.3in,bottom=0.3in,left=0.3in,right=0.3in]{geometry}\\usepackage{setspace}\\setstretch{0.9}\\usepackage{enumitem}\\setlist[itemize]{noitemsep,topsep=0pt,parsep=0pt,partopsep=0pt,leftmargin=*}\\setlist[enumerate]{noitemsep,topsep=0pt,leftmargin=*}\\def\\tightlist{\\setlength{\\itemsep}{0pt}\\setlength{\\parskip}{0pt}}\\usepackage{parskip}\\setlength{\\parskip}{4pt}\\setkomafont{disposition}{\\normalfont\\bfseries}" \
    && echo "PDF generated: $OUTPUT_FILE"
}

if [[ "$1" == "--watch" ]]; then
  echo "Watching $WATCH_FILE for changes..."
  while true; do
    echo "$WATCH_FILE" | entr -d ./generate-pdf.sh
    sleep 1
  done
else
  generate
fi
