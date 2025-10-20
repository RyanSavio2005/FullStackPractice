import React from "react";

function IssueList() {
  // Static data for issues
  const issues = [
    {
      id: 1,
      title: "Login button not working",
      description: "Users are unable to log in using the login button.",
      status: "Open",
    },
    {
      id: 2,
      title: "UI alignment issue on homepage",
      description: "Elements overlap on smaller screens.",
      status: "Closed",
    },
    {
      id: 3,
      title: "API error on fetching user details",
      description: "Error 500 when fetching details for specific users.",
      status: "Open",
    },
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Issue Tracker</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {issues.map((issue) => (
          <li
            key={issue.id}
            style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              backgroundColor: issue.status === "Open" ? "#ffe6e6" : "#e6ffe6",
            }}
          >
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <p>
              <strong>Status:</strong> {issue.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IssueList;
