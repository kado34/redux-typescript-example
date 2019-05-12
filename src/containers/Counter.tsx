import { AppState } from '../Reducer';
import Counter, { CounterProps } from '../components/Counter';
import { Dispatch } from 'redux';
import { CounterAction, addCount, reset } from '../actions/Count';
import { connect } from 'react-redux';

interface DispatchProps {
  addCount: (val: number) => void;
  reset: () => void;
}

const mapStateToProps = (state: AppState): CounterProps => ({
  value: state.counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>): DispatchProps => ({
  addCount: (val: number) => {
    dispatch(addCount(val));
  },
  reset: () => {
    dispatch(reset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
