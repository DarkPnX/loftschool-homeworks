// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

class OutboxList extends Component {
    render() {
        const { data } = this.props;
        return (
            <MailList className="t-outbox-list" emails={data.outbox} type="outbox" />
        );
    }
}

export default withData(OutboxList);