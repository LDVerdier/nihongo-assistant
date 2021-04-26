import { connect } from 'react-redux';
import Answer from 'src/components/Quiz/Answer';
import { setSlideToAnswered, incrementSlideCount } from 'src/actions/quiz';

const mapStateToProps = (state, ownProps) => ({
  answer: ownProps.answer,
  wasAnswered: state
    .quiz
    .slides[state.quiz.currentSlideIndex]
    .wasAnswered,
});

const mapDispatchToProps = (dispatch) => ({
  setSlideToAnswered: (isCorrect) => {
    dispatch(setSlideToAnswered(isCorrect));
  },
  incrementSlideCount: () => {
    dispatch(incrementSlideCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
