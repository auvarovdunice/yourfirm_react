import {all, fork, takeEvery, put} from 'redux-saga/effects';
import {GET_AWARDS, SET_AWARDS} from './constants';
import actions from './actions';

import award1 from '../../public/Award1.png'
import award2 from '../../public/Award2.png'
import award3 from '../../public/Award3.png'
import award4 from '../../public/Award4.png'
import award5 from '../../public/Award5.png'

const HANDLERS = {
    * [GET_AWARDS]() {
        try {
            const awards = [
                { id:1, src: award1 },
                { id:2, src: award2 },
                { id:3, src: award3 },
                { id:4, src: award4 },
                { id:5, src: award5 },
            ];
            yield put(actions.setAwards(awards));
        } catch (err) {
        }
    }
};

export function* sagaWatcher({ type, payload }) {
    const handler = HANDLERS[type];
    if (handler != null) yield handler(payload);
}


export default function* sagaReducerAuth() {
    yield takeEvery('*', sagaWatcher);
}