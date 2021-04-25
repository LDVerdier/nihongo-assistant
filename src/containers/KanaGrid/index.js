import { connect } from 'react-redux';
import KanaGrid from 'src/components/KanaGrid';
// import { props } from 'src/actions';

const mapStateToProps = (state, ownProps) => ({
  // propName: valueFromTheState,
  kanaType: ownProps.kanaType,
  kana: state.kanas.list,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
//   props: () => {
//     dispatch(props());
//   },
});

export default connect(mapStateToProps, mapDispatchToProps)(KanaGrid);
