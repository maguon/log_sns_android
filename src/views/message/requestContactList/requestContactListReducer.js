import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        requestContactList: []
    },
    getRequestContactList: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    },
    getRequestContactListMore: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.requestContactList.get_requestContactList_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.requestContactList.get_requestContactList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.requestContactList.get_requestContactList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.requestContactList.get_requestContactListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.requestContactList.get_requestContactListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.requestContactList.get_requestContactListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    },

    [reduxActionTypes.requestContactList.refuse_requestContact_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.requestContactList.refuse_requestContact_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.requestContactList.refuse_requestContact_waiting]: (state, action) => {
        return {
            ...state,
        }
    },

    [reduxActionTypes.requestContactList.agree_requestContact_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.requestContactList.agree_requestContact_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.requestContactList.agree_requestContact_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)