// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
import {
    fetchShowRequest,
    fetchShowSuccess,
    fetchShowFailure,
} from '../actions';
import { show } from '../api';

export const showMiddleware = store => next => action => {
    if (action.type === fetchShowRequest.toString())
        show(action.payload)
            .then(res => {
                store.dispatch(fetchShowSuccess(res));
            })
            .catch(error => {
                store.dispatch(fetchShowFailure(error));
            });

    return next(action);
}