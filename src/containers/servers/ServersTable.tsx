import React from 'react';
import Table from '../../components/Table/Table';
import { ServerType } from '../../store/types/server.types';

type Props = {
  servers: ServerType[];
};

const TABLE_COLUMNS = [
  {
    title: 'Name',
    valueKey: 'name',
  },
  {
    title: 'Distance',
    valueKey: 'distance',
  },
];

export default function ServersTable({ servers }: Props) {
  return (
    <div>
      <Table data={servers} columns={TABLE_COLUMNS} />
    </div>
  );
}
