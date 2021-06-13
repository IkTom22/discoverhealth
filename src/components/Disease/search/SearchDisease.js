import React from "react";
// import axios from "axios";
// import useInputState from "../../../hooks/useInputState";

class SearchDisease extends React.Component {
  state = { term: "" };
  //   const onSearchSubmit = (term) => {
  //     axios.get("https://api.nhs.uk/conditions", {
  //       params: { query: term },
  //       headers: {
  //         "subscription-key": "8b7799861e644dcda117df3841f5cf73",
  //       },
  //     });
  //   };
  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Add something "
            name="name"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchDisease;
