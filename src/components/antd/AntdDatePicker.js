import React, { Component } from 'react';
import { DatePicker,ConfigProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/es/locale/zh_CN';

const { RangePicker } = DatePicker;

class AntdDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange = (date, dateString) => {
        console.log('dateString: ', dateString);
        console.log(date, dateString);
    }
    render() {
        const dateFormat = 'YYYY/MM/DD';
        const dateForma2 = 'YYYY-MM-DD';
        const monthFormat = 'YYYY/MM'; 
        const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


        return (
            <div style={{ 'padding': "1px 1px 1px 100px" }}>
                <ConfigProvider locale={zhCN}>
                <DatePicker onChange={this.onChange} /> 
                <DatePicker onChange={this.onChange} picker="week"  style={{ 'margin': "20px" }}/> 
                <DatePicker onChange={this.onChange} picker="month"   style={{ 'margin': "10px" }}/> 
                <DatePicker onChange={this.onChange} picker="quarter"   style={{ 'margin': "20px" }}/> 
                <DatePicker onChange={this.onChange} picker="year" />

                <br />
                <br /> 
                <DatePicker onChange={this.onChange} defaultValue={moment(moment(), dateFormat)} format={dateFormat} />
                <DatePicker onChange={this.onChange} defaultValue={moment(moment(), dateFormatList[0])} format={dateFormatList}  style={{ 'margin': "20px" }}/>
                <DatePicker onChange={this.onChange} defaultValue={moment(moment(), monthFormat)} format={monthFormat} picker="month"   style={{ 'margin': "20px" }}/>
                <RangePicker 
                    onChange={this.onChange}
                    defaultValue={[moment(moment(), dateFormat), moment(moment(), dateForma2)]}
                    format={dateForma2}
                />
                </ConfigProvider>
            </div>
        );
    }
}

export default AntdDatePicker;