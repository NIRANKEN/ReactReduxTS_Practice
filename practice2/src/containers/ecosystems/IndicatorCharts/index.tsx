import Loadable from 'react-loadable';
import { CircularProgress } from '@material-ui/core';

export default Loadable({
    loader: () => import ('./StoreConnected'),
    loading: () => (
        <CircularProgress
        size={30}
        data-testid="indicator-chart-loading-progress"
        />
    ),
});