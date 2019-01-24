// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
import {
    fetchSearchRequest,
    fetchSearchSuccess,
    fetchSearchFailure,
} from '../actions';
import { search } from '../api';

export const searchMiddleware = store => next => action => {
    if (action.type === fetchSearchRequest.toString()) {
        search(action.payload)
            .then(res => {
                store.dispatch(fetchSearchSuccess(res));
            })
            .catch(error => {
                store.dispatch(fetchSearchFailure(error));
            });
    }

    return next(action);
}