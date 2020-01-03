import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        collectionList: []
    },
    getCollectionList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getCollectionListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.collectionList.get_collectionList_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.collectionList.get_collectionList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.collectionList.get_collectionList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.collectionList.get_collectionListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.collectionList.get_collectionListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.collectionList.get_collectionListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)