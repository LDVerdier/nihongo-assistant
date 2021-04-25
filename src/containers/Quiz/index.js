import { connect } from 'react-redux';
import Quiz from 'src/components/Quiz';
import { toggleOptions } from 'src/actions/quiz';

const mapStateToProps = (state, ownProps) => ({
  hideOptions: state.quiz.hideOptions,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleOptions: () => {
    dispatch(toggleOptions());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
