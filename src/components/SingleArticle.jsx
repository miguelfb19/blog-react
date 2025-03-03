import Moment from "react-moment";
import "moment/locale/es";
import { Link } from "react-router-dom";
import defaultImg from "../assets/images/sinImagen.jpg";
import { useEffect, useState } from "react";
import { getImagesFromDS3 } from "../services/get-images-from-s3";

export const SingleArticle = ({ singleArticle }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (singleArticle.image == null) {
      return;
    }
    getImagesFromDS3(singleArticle.image).then((res) => setImage(res.fileUrl));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <article
        className="article-item"
        id="article-template"
        key={singleArticle._id}
      >
        <Link to={"/blog/article/" + singleArticle._id}>
          <div className="image-wrap">
            {singleArticle.image == null ? (
              <img src={defaultImg} alt={singleArticle.title} />
            ) : (
              <img src={image} alt={singleArticle.title} />
            )}
          </div>
        </Link>

        <div className="content-article-item">
            <h2>{singleArticle.title}</h2>
            <span className="date">
              {" "}
              <Moment fromNow>{singleArticle.date}</Moment>{" "}
            </span>
            <Link to={"/blog/article/" + singleArticle._id}>Leer más</Link>
        </div>
        <div className="clearfix"></div>
      </article>
    </>
  );
};
