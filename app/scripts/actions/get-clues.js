// we want to take in arguments with a specific clue request in this format:
// http://jservice.io/api/clues?value=200&category=223

// need 2 arguments: value of question and category id
// maybe need a 3rd argument for callback or something?

export default function getClues(value, categoryId) {
  return  $.ajax({
    method: 'GET',
    url: `http://jservice.io/api/clues?value=${value}&category=${categoryId}`,
    dataType: 'json'
  }).then(function (response) {
    console.log(response);
  })
}
