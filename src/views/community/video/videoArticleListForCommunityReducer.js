import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        articleList: [],
        isCompleted: false
    },
    getVideoArticleList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getVideoArticleListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.videoArticleListForCommunity.get_videoArticleListForCommunity_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleList,
                isCompleted
            },
            getVideoArticleList: {
                ...state.getVideoArticleList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.videoArticleListForCommunity.get_videoArticleListForCommunity_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getVideoArticleList: {
                ...state.getVideoArticleList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.videoArticleListForCommunity.get_videoArticleListForCommunity_waiting]: (state, action) => {
        return {
            ...state,
            getVideoArticleList: {
                ...state.getVideoArticleList,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.videoArticleListForCommunity.get_videoArticleListForCommunityMore_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleList: [...state.data.articleList, ...articleList],
                isCompleted
            },
            getVideoArticleListMore: {
                ...state.getVideoArticleListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.videoArticleListForCommunity.get_videoArticleListForCommunityMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getVideoArticleListMore: {
                ...state.getVideoArticleListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.videoArticleListForCommunity.get_videoArticleListForCommunityMore_waiting]: (state, action) => {
        return {
            ...state,
            getVideoArticleListMore: {
                ...state.getVideoArticleListMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)