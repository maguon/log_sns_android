import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'


export const getVoteInfo = reqParams => async (dispatch) => {
    try {
        const url = ``
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
        if(res.success){

        }else{
            dispatch({ type: reduxActionTypes.voteInfo.get_voteInfo_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.voteInfo.get_voteInfo_failed, payload: { failedMsg: `${err}` } })
    }
}