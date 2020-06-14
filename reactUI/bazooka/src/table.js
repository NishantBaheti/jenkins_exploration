import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th> key </th>
        <th> value </th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.key}</td>
        <td>{row.value}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;
