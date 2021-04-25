import { connect } from 'react-redux';
import Options from 'src/components/Quiz/Options';
import { updateOptions } from 'src/actions/quiz';

const mapStateToProps = (state) => ({
  availableOptions: state.quiz.availableOptions,
  currentOptions: state.quiz.currentOptions,
});

const mapDispatchToProps = (dispatch) => ({
  updateOptions: (value, name) => {
    dispatch(updateOptions(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);
