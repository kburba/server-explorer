import React from 'react';
import { Link } from 'react-router-dom';
import { TableColumn } from './table.types';
import { formatCellValue, useSortBy } from './utils';

type TableProps = {
  columns: TableColumn[];
  data: any[];
};

export default function Table({ columns, data }: TableProps) {
  const [sortedData, sortBy, setSort] = useSortBy(data);

  return (
    <table className="kbtable">
      <thead>
        <tr>
          {columns.map((column, idx) => {
            const sortIcon =
              sortBy && sortBy.by === column.valueKey
                ? sortBy.asc
                  ? String.fromCharCode(8595)
                  : String.fromCharCode(8593)
                : null;
            return (
              <th
                key={`${idx}-${column}`}
                onClick={() => setSort(column.valueKey)}
              >
                {column.title} {sortIcon}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, rowIdx) => {
          return (
            <tr key={rowIdx}>
              {columns.map((column, colIdx) => {
                const cellValue = formatCellValue(
                  item[column.valueKey],
                  column.valueType
                );
                const valueAsLink = column.onClick ? (
                  <Link
                    to={`${column.onClick.linkPrefix}${
                      item[column.onClick.linkKey]
                    }`}
                  >
                    {cellValue}
                  </Link>
                ) : (
                  cellValue
                );
                return <td key={`${colIdx}-${column.title}`}>{valueAsLink}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
