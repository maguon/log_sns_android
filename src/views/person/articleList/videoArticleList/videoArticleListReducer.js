import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../../reduxActionTypes'

const initialState = {
    data: {
        videoArticleList: [],
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

export default handleActions({
    [reduxActionTypes.videoArticleList.get_videoArticleList_success]: (state, action) => {
        const { payload: { videoArticleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...initialState,
            data: {
                ...initialState.data,
                videoArticleList,
                isCompleted
            },
            getVideoArticleList: {
                ...initialState.getVideoArticleList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.videoArticleList.get_videoArticleList_failed]: (state, action) => {
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
    [reduxActionTypes.videoArticleList.get_videoArticleList_waiting]: (state, action) => {
        return {
            ...state,
            getVideoArticleList: {
                ...state.getVideoArticleList,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.videoArticleList.get_videoArticleListMore_success]: (state, action) => {
        const { payload: { videoArticleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                videoArticleList: [...state.data.videoArticleList, ...videoArticleList],
                isCompleted
            },
            getVideoArticleListMore: {
                ...state.getVideoArticleListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.videoArticleList.get_videoArticleListMore_failed]: (state, action) => {
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
    [reduxActionTypes.videoArticleList.get_videoArticleListMore_waiting]: (state, action) => {
        return {
            ...state,
            getVideoArticleListMore: {
                ...state.getVideoArticleListMore,
                isResultStatus: 1
            }
        }
    },



    [reduxActionTypes.videoArticleList.rm_videoArticleList]: (state, action) => {
        return {
            ...initialState
        }
    },



    [reduxActionTypes.videoArticleList.rm_itemForVideoArticleList_byId]: (state, action) => {
        const { payload: { messageId } } = action
        return {
            ...state,
            data: {
                ...state.data,
                videoArticleList: state.data.videoArticleList.filter(item => item._id != messageId)
            }
        }
    },




    [reduxActionTypes.videoArticleList.update_itemForVideoArticleList_byId]: (state, action) => {
        const { payload: { article } } = action
        return {
            ...state,
            data: {
                ...state.data,
                videoArticleList: state.data.videoArticleList.map(item => {
                    if (item._id == article._id) {
                        return article
                    } else {
                        return item
                    }
                })
            }
        }
    }
}, initialState)