function generateCitation() {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const publisher = document.getElementById("publisher").value;
  const year = document.getElementById("year").value;
  const style = document.getElementById("style").value;

  let citation = "";

  if (style === "apa") {
    citation = `${author}. (${year}). <i>${title}</i>. ${publisher}.`;
  } else if (style === "mla") {
    citation = `${author}. <i>${title}</i>. ${publisher}, ${year}.`;
  }

  document.getElementById("result").innerHTML = citation;
}
