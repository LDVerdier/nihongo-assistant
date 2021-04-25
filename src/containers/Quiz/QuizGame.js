import { connect } from 'react-redux';
import QuizGame from 'src/components/Quiz/QuizGame';
// import { props } from 'src/actions';

const mapStateToProps = (state) => ({
  // propName: valueFromTheState,
  currentOptions: state.quiz.currentOptions,
});

const mapDispatchToProps = (dispatch) => ({
//   props: () => {
//     dispatch(props());
//   },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizGame);
