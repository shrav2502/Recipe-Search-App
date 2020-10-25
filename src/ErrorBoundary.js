import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    console.error("Error Boundary caught an error", error, info);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>API points limits got over today.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
