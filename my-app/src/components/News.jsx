import { Box } from "@chakra-ui/react";
import React from "react";

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name1: "loading.....",count:0 };
      
    }
    async componentDidMount() {
      console.log("");
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=39c3025e706146f99c1db7b6e2295f6e`
      );
      let data = await res.json();
      console.log(data, typeof data.articles, data.articles, typeof ar);
      let arr = data.articles.map((p) => {
        return (
            <Box display="grid" width="60%" height="400px" gridColumn="3,1fr"  ml="300px">
          <div display="flex" gridColumn="3,1fr"> 
          <div>
            <img width="40%" src={p.urlToImage}/>
            <div>
              <div >{p.title}</div>
              <p >
                {p.description}
              </p>
              <button> <a href={p.url}>Read more</a></button>
            </div>
          </div>
        </div>
        </Box>
        );
      });
      console.log(arr);
      this.setState({ name1: arr });
    }
    render() {
      return  <div display="flex">{this.state.name1} </div>;
  }}

export default News;