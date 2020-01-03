import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        collectionLocationList: []
    },
    getCollectionLocationList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getCollectionLocationListMore: {
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