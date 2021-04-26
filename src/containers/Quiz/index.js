import { connect } from 'react-redux';
import Quiz from 'src/components/Quiz';
import { toggleOptions, clearQuiz } from 'src/actions/quiz';

const mapStateToProps = (state) => ({
  hideOptions: state.quiz.hideOptions,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOptions: () => {
    dispatch(toggleOptions());
  },
  clearQuiz: () => {
    dispatch(clearQuiz());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
