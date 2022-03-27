import React, { useEffect, useState } from "react";
import "../App.css";
import Markdown from "markdown-to-jsx";
import Footer from "./Footer";
import HeaderForBooks from "./HeaderForBooks";
import $ from "jquery";

const Books = (props) => {
  const [posts, setPost] = useState([
    {
      id: 0,
      file: "",
      contents: "",
    },
  ]);

  const addPost = (post) => {
    setPost([...posts, post]);
  };

  useEffect(() => {
    const getBookListJson = () => {
      $.ajax({
        url: "./bookList.json",
        dataType: "json",
        cache: false,
        success: function (bookList) {
          bookList
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((book) => {
              import(`../../public/posts/${book.fileName}`)
                .then((res) => {
                  fetch(res.default)
                    .then((res) => res.text())
                    .then((res) => {
                      addPost({
                        id: Number(book.id),
                        fileName: book.fileName,
                        contents: res,
                      });
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
            });
        }.bind(this),
        error: function (xhr, status, err) {
          console.log(err);
          alert(err);
        },
      });
    };
    getBookListJson();
  }, []);
  return (
      <div className="App">
        <HeaderForBooks />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {posts.map((post) => (
                  <div className="col-md-4" key={post.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{post.fileName}</h5>
                        <Markdown>{post.contents}</Markdown>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer data={props.state.resumeData.main} />
    </div>
  );
};

export default Books;
