import React from "react";

const welcome = {
  greeting: "Hey",
  title: "React",
};

function getTitle(title: string) {
  return title;
}

const list = [
  {
    title: "React",
    url: "https://reactjs.org//",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function BookApp() {
  return (
    <div>
      <h3>
        {welcome.greeting} {welcome.title}
      </h3>
      <h3>Hello {getTitle("React")}</h3>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a className="font-yellow p-2" href={item.url}>
                  {item.title},
                </a>
              </span>
              <span>{item.author}</span>
              <span className="p-2">{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
      <code>Start: p. 32</code>
    </div>
  );
}

export default BookApp;
