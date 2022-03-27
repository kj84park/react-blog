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
          // setPost(data);
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
    // <div className="App">
    <div>
      {/*<HeaderForBooks data={props.state.resumeData.main} />*/}
      <div>
        <ul>
          {posts.map((post) => {
            console.log("### " + post.id + " => " + post.contents);
            return (
              <li key={post.id}>
                <Markdown>{post.contents}</Markdown>
              </li>
            );
          })}
        </ul>
      </div>
      {/*<Footer data={props.state.resumeData.main} />*/}
    </div>
  );
};

export default Books;

// <div className="post-preview">
//     <h2 className="post-title">
//         <a href={po.link}>{po.title}</a>
//     </h2>
//     <h3 className="post-subtitle">
//         <a href={po.link}>{po.subtitle}</a>
//     </h3>
//     <p className="post-meta">Posted by
//         <a href={po.link}>{po.author}</a>
//         on {po.date}</p>
//     <Markdown>
//         {po.content}
//     </Markdown>
// </div>
