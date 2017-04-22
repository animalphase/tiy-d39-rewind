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

let initialState = {
  username: 'ripley',
  savedPosts: [],
  draft: '',
  questionsApp: {
    questions: questionsArray
  }
};

export default function AppReducer(currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'UPDATE_DRAFT':
      var newState = {
        draft: action.rawText
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
  }

  return currentState;
}
