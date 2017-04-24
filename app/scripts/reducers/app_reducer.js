let questionsArray = [
  {
    id: 1,
    question: 'What colors do you like?',
    answer: ''
  },
  {
    id: 2,
    question: 'What are your feelings on brunch?',
    answer: ''
  },
  {
    id: 3,
    question: 'And your name?',
    answer: ''
  },
  {
    id: 4,
    question: 'Ideal friend date spot?',
    answer: ''
  },
  {
    id: 5,
    question: 'What is your ideal number of friends to have in one room?',
    answer: ''
  },
  {
    id: 6,
    question: 'How much time do you spend engaging with artistic works?',
    answer: ''
  },
  {
    id: 7,
    question: 'So……………… politics??',
    answer: ''
  },
  {
    id: 8,
    question: 'How do you feel about your Zodiac sun sign?',
    answer: ''
  },
  {
    id: 9,
    question: 'How do you feel about baths?',
    answer: ''
  },
  {
    id: 10,
    question: 'What place other than the Earth would you like to end up?',
    answer: ''
  }
];

const questionCategoryCount = 6;

let initialState = {
  username: 'ripley',
  markdownApp: {
    savedPosts: [],
    draft: ''
  },
  questionsApp: {
    questions: questionsArray
  },
  betterApp: {
    categoryCount: questionCategoryCount,
    categories: [],
    loading: true
  }
};

export default function AppReducer(currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'UPDATE_DRAFT':
      // var newState = Object.assign({}, currentState);
      // newState.markdownApp.draft = action.rawText;
      var newState = {
        markdownApp: {
          draft: action.rawText
        }
      };
      return Object.assign({}, currentState, newState);

    case 'SET_ANSWER':
      let newState = currentState;
      newState.questionsApp.questions.forEach((question, i, array) => {
        if (question.id == Number(action.answerId)) {
          question.answer = action.answerInput;
        }
      });
      return newState;

    case 'LOAD_CLUES':
      return currentState;

    case 'INITIALIZE_CLUES':
      console.log('INITIALIZING');
      return currentState;

    case 'ADD_CATEGORY':
      let updatedCategories = currentState.betterApp.categories.slice();
      updatedCategories.push(action.category_info);

      // check length to see if we're done loading all categories!
      var newState = {
        betterApp: {
          categoryCount: questionCategoryCount,
          categories: updatedCategories,
          loading: updatedCategories.length >=
            currentState.betterApp.categoryCount
            ? false
            : true
        }
      };

      return Object.assign({}, currentState, newState);

    default:
      console.debug(`Unhandled Action: ${action.type}!`);
      return currentState;
  }

  return currentState;
}
