import React, { Component } from "react";

import axios from "axios";
import Global from "./Global"
import { SingleArticle } from "./SingleArticle";

class Articles extends Component {
  url = Global.url;

  state = {
    articles: [],
    status: "",
    image:"not-image"
  };

  componentDidUpdate() {
    if (this.props.searchString) {
      axios.get(`${this.url}search/${this.props.searchString}`).then((res) => {
        if (res.data.articles.length >= 1) {
          this.setState({
            articles: res.data.articles,
          });
        } else {
          this.setState({
            articles: [],
            status: "success",
          });
        }
      });
    }
  }

  componentDidMount() {
    if (this.props.lastArticles) {
      axios
        .get(this.url + "articles/last")
        .then((res) => {
          this.setState({
            articles: res.data.articles,
            status: res.data.status.toLowerCase(),
          });
        })
        .catch((error) => {
          console.log(error);
          throw new Error("No se obtuvieron los datos del API");
        });
    } else if (this.props.searchString) {
      axios
        .get(`${this.url}search/${this.props.searchString}`)
        .then((res) => {
          if (res.data.articles.length >= 1) {
            this.setState({
              articles: res.data.articles,
            });
          } else {
            this.setState({
              articles: [],
              status: "success",
            });
          }
        })
        .catch((error) => {
          throw new error("404, Error obteniendo datos del servidos");
        });
    } else {
      axios
        .get(this.url + "articles")
        .then((res) => {
          this.setState({
            articles: res.data.articles,
          });
        })
        .catch((error) => {
          console.log(error);
          throw new Error("No se obtuvieron los datos del API");
        });
    }
  }

  render() {
    if (this.state.articles.length >= 1) {
      return (
        <React.Fragment>
          <div id="articles">
            {this.props.lastArticles && (
              <h2 className="sub-header">Ultimos artículos</h2>
            )}
            {this.state.articles.map((article) => {
              return (
                <SingleArticle singleArticle={article}/>
              );
            })}
          </div>
        </React.Fragment>
      );
    } else if (
      this.state.articles.length === 0 &&
      this.state.status.toLowerCase() === "success"
    ) {
      return <h3 className="sub-header">No hay artículos para mostrar</h3>;
    } else {
      return (
        <div>
          <div className="spinner"></div>
          <h2 className="loadingText">Cargando...</h2>
        </div>
      );
    }
  }
}

export default Articles;
