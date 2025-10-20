import React from "react";

class IssueFilter extends React.Component {
  render() {
    return <div>Issue Filter (placeholder)</div>;
  }
}

class IssueTable extends React.Component {
  render() {
    const issues = [
      { id: 1, status: "Open", owner: "Ravan", title: "Bug in login" },
      { id: 2, status: "Closed", owner: "Eddie", title: "UI glitch" },
    ];

    return (
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th><th>Status</th><th>Owner</th><th>Title</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(({ id, status, owner, title }) => (
            <tr key={id}>
              <td>{id}</td><td>{status}</td><td>{owner}</td><td>{title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return <div>Issue Add Form (placeholder)</div>;
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <div>
        <h2>Issue Tracker</h2>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </div>
    );
  }
}

export default IssueList;