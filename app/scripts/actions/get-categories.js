// example category request:
// http://jservice.io/api/category?id=18418

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function getCategories() {
  return (dispatch, getState) => {
    const firstCategory = 1;
    const lastCategory = 18418;

    // generating data table:
    const categoryCount = getState().betterApp.categoryCount;
    const questionValues = [200, 400, 600, 800, 1000];
    let categoryIDs = [];
    for (
      let currentColumn = 0;
      currentColumn < categoryCount;
      currentColumn++
    ) {
      categoryIDs[currentColumn] = randomInt(firstCategory, lastCategory);
      $.ajax({
        method: 'GET',
        url: `http://jservice.io/api/category?id=${categoryIDs[currentColumn]}`,
        dataType: 'json'
      }).then(function(response) {
        dispatch({
          type: 'ADD_CATEGORY',
          category_info: response
        });
      });
    }
  };
}
