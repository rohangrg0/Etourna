// components/DashboardTable.tsx
import React from "react";

interface TableColumn {
  title: string;
  key: string;
}

interface TableRow {
  [key: string]: string | number | React.ReactNode;
}

interface DashboardTableProps {
  columns: TableColumn[];
  data: TableRow[];
  title?: string;
}

const DashboardTable: React.FC<DashboardTableProps> = ({ columns, data, title }) => {
  return (
    <div className="bg-gray-800 text-white rounded-2xl p-4 shadow-md w-full overflow-x-auto">
      {title && <p className="text-lg font-bold mb-4">{title}</p>}
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-700">
            {columns.map((col) => (
              <th key={col.key} className="text-left p-2 text-gray-400">{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-700 hover:bg-gray-700">
              {columns.map((col) => (
                <td key={col.key} className="p-2">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
