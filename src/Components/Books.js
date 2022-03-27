import React, { useEffect, useState } from "react";
import "../App.css";
import Markdown from "markdown-to-jsx";
import Footer from "./Footer";
import HeaderForBooks from "./HeaderForBooks";

const Books = (props) => {
  const file_name = "2021-09-18-21.12. 크래프톤 웨이.md";
  const [post, setPost] = useState("");

  useEffect(() => {

      // getAllFiles(`path/to/dir/or/file`).toArray().then(files => {
      //   files.map(file => {
            import(`../../public/posts/${file_name}`)
                .then((res) => {
                    fetch(res.default)
                        .then((res) => res.text())
                        .then((res) => setPost(res))
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        // });
      // });
  });

  return (
    <div className="App">
      <HeaderForBooks data={props.state.resumeData.main} />
      <Markdown>{post}</Markdown>
      <Footer data={props.state.resumeData.main} />
    </div>
  );
};

export default Books;
