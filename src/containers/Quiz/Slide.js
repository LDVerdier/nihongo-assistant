import { connect } from 'react-redux';
import Slide from 'src/components/Quiz/Slide';
// import { props } from 'src/actions';

const mapStateToProps = (state) => ({
  currentSlideIndex: state.quiz.currentSlideIndex,
  quizLength: state.quiz.slides.length,
  questionText: state
    .quiz.slides[state.quiz.currentSlideIndex]
    .question[state.quiz.currentOptions.kanaType],
  answers: state.quiz.slides[state.quiz.currentSlideIndex].answers,
});

const mapDispatchToProps = (dispatch) => ({
//   props: () => {
//     dispatch(props());
//   },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
