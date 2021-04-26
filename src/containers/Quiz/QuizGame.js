import { connect } from 'react-redux';
import QuizGame from 'src/components/Quiz/QuizGame';
import { initiateSlides, incrementSlideCount } from 'src/actions/quiz';

const mapStateToProps = (state) => ({
  // propName: valueFromTheState,
  currentOptions: state.quiz.currentOptions,
  hasStarted: state.quiz.hasStarted,
  hasFinished: state.quiz.hasFinished,
  goodAnswers: state.quiz.goodAnswers,
});

const mapDispatchToProps = (dispatch) => ({
  initiateSlides: () => {
    dispatch(initiateSlides());
  },
  incrementSlideCount: () => {
    dispatch(incrementSlideCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizGame);
