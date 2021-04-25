import { connect } from 'react-redux';
import KanaGrid from 'src/components/KanaGrid';
// import { props } from 'src/actions';

const mapStateToProps = (state, ownProps) => ({
  // propName: valueFromTheState,
  kanaType: ownProps.kanaType,
  kana: state.kanas.list,
});

export default connect(mapStateToProps, null)(KanaGrid);
