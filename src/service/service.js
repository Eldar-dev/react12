import React from "react";

class Service extends React.Component {
  async requestData() {
    const url = "https://rn-todo-app-c27d4.firebaseio.com/todos.json";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    return await response.json();
  }
}

export default Service;
