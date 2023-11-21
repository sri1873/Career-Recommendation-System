import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { RankType } from '../../types';

const columns: ColumnsType<RankType> = [
    {
        title: 'Rank',
        dataIndex: 'rank',
        width:50
    },
    {
        title: 'Student Name',
        dataIndex: 'user_name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Performance',
        dataIndex: 'actual_marks',
        width:100
    }
];
interface Props {
    data: RankType[] | null;
}

const RankChart: React.FC<Props> = ({ data }) => {

    return (
        <div className='table-container'>
            {data ?
                <Table style={{backgroundColor :"black"}}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    scroll={{ y: 150 }}
                    size='small'
                /> : null}
        </div>
    );
};

export default RankChart;
