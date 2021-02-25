import React, { Component } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";

class DashboardRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  render() {
    return <section className="dashboard-form">
      <Dashboard />
    </section>;
  }
}

export default DashboardRoute;
