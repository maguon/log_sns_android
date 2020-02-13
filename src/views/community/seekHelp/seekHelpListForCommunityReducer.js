import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        articleList: [],
        isCompleted: false
    },
    getSeekHelpList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getSeekHelpListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunity_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleList,
                isCompleted
            },
            getSeekHelpList: {
                ...state.getSeekHelpList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunity_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getSeekHelpList: {
                ...state.getSeekHelpList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunity_waiting]: (state, action) => {
        return {
            ...state,
            getSeekHelpList: {
                ...state.getSeekHelpList,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunityMore_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleList: [...state.data.articleList, ...articleList],
                isCompleted
            },
            getSeekHelpListMore: {
                ...state.getSeekHelpListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunityMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getSeekHelpListMore: {
                ...state.getSeekHelpListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunityMore_waiting]: (state, action) => {
        return {
            ...state,
            getSeekHelpListMore: {
                ...state.getSeekHelpListMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)