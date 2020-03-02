import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { List, Checkbox, WhiteSpace, Button, Progress } from '@ant-design/react-native'
import { reduxForm, Field, getFormValues } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../reduxActions'

const CheckboxModal = props => {
    const { input: { value } } = props
    // console.log('value', value)
    const checkboxList = props.options.map((item, i) => {
        return (
            <View key={i} style={{ alignItems: 'stretch', marginHorizontal: 10, borderBottomWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#ccc' }}>
                <View style={{ margin: 10 }}>
                    <Checkbox
                        checked={value.some(checkeditem => checkeditem.index == i)}
                        disabled={value.length > (props.checkedmaxcount - 1) && !value.some(checkeditem => checkeditem.index == i)}
                        onChange={params => {
                            if (params.target.checked) {
                                props.addChecked({
                                    txt: item.txt,
                                    index: i
                                })
                            } else {
                                props.removeChecked({
                                    txt: item.txt,
                                    index: i
                                })
                            }
                        }}>{`选项${i + 1}`}</Checkbox>
                </View>
                <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
                    <Text style={{ color: '#555' }}>{item.txt}</Text>
                </View>
            </View>
        )
    })

    return (
        <View>
            {checkboxList}
        </View>
    )
}

class VoteCheck extends Component {
    constructor(props) {
        super(props)

        this.addChecked = this.addChecked.bind(this)
        this.removeChecked = this.removeChecked.bind(this)
    }

    addChecked(item) {
        const { dispatch, change, voteCheckFormValues } = this.props
        dispatch(change('checkboxList', [...voteCheckFormValues.checkboxList, item]))
    }

    removeChecked(item) {
        const { dispatch, change, voteCheckFormValues } = this.props
        dispatch(change('checkboxList', voteCheckFormValues.checkboxList.filter(checkboxListItem => checkboxListItem.index != item.index)))
    }

    render() {
        const { handleSubmit, voteInfo } = this.props
        // console.log('voteInfo', voteInfo)
        return (
            <View>
                <View style={{ marginHorizontal: 10, marginTop: 10, padding: 10, borderWidth: 0.5, borderColor: '#ccc' }}>
                    <Text>最多可选1票</Text>
                </View>
                <Field
                    name="checkboxList"
                    component={CheckboxModal}
                    addChecked={this.addChecked}
                    removeChecked={this.removeChecked}
                    checkedmaxcount={voteInfo.max_num}
                    options={voteInfo.option} />
                <View style={{ margin: 10 }}>
                    <Button type="primary" onPress={handleSubmit}>提交投票</Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        voteCheckFormValues: getFormValues('voteCheckForm')(state)
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: 'voteCheckForm',
    initialValues: {
        checkboxList: []
    },
    onSubmit: (values, dispatch, props) => {
        const { voteInfo } = props
        if (values.checkboxList.length > 0) {
            dispatch(reduxActions.voteInfo.vote({
                voteId: voteInfo._id,
                optionItem: values.checkboxList
            }))
        } else {

        }
    }
})(VoteCheck))