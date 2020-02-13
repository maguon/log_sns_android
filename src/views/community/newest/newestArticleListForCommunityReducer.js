import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        articleList: [],
        isCompleted: false
    },
    getNewestArticleList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getNewestArticleListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunity_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleList,
                isCompleted
            },
            getNewestArticleList: {
                ...state.getNewestArticleList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunity_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getNewestArticleList: {
                ...state.getNewestArticleList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunity_waiting]: (state, action) => {
        return {
            ...state,
            getNewestArticleList: {
                ...state.getNewestArticleList,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunityMore_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleList: [...state.data.articleList, ...articleList],
                isCompleted
            },
            getNewestArticleListMore: {
                ...state.getNewestArticleListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunityMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getNewestArticleListMore: {
                ...state.getNewestArticleListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunityMore_waiting]: (state, action) => {
        return {
            ...state,
            getNewestArticleListMore: {
                ...state.getNewestArticleListMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)