import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import _ from 'lodash';

const initialState = {
    tileUrl: null,
    isTileUrlLoading: true,
    mediaSources: [],
    currentMediaSource: null,
    liveRtspUrl: null,
    isMediaSourceListLoading: true,
    isRtspUrlLoading: false
};

function findMediaSourceById(list, id) {
    return _.find(list, (i) => {
        return id === i.id;
    });
}

export default handleActions({

    [actionTypes.tileUrlLoaded]: (state, { payload }) => {
        return _.assign({}, state, {
            isTileUrlLoading: false,
            tileUrl: payload.url
        });
    },

    [actionTypes.mediaSourceListLoaded]: (state, { payload }) => {
        return _.assign({}, state, {
            isMediaSourceListLoading: false,
            mediaSources: payload.mediaSources.filter((m) => {
                return m.latitude && m.longitude;
            })
        });
    },

    [actionTypes.setCurrentMediaSource]: (state, { payload }) => {
        return _.assign({}, state, {
            currentMediaSource: findMediaSourceById(state.mediaSources, payload),
            isRtspUrlLoading: true
        });
    },

    [actionTypes.closeDialog]: (state, { payload }) => {
        return _.assign({}, state, {
            currentMediaSource: null,
            liveRtspUrl: null,
            isRtspUrlLoading: false
        });
    },

    [actionTypes.rtspUrlLoaded]: (state, { payload }) => {
        return _.assign({}, state, {
            liveRtspUrl: payload.url,
            isRtspUrlLoading: false
        });
    }


}, initialState);