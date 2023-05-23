import { Component } from 'react';
import { GetNews } from 'components/servises/getNews';

class ContentInfo extends Component {
  state = { news: null, isLoading: false };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true });
      GetNews(this.props.searchText)
        .then(res => res.json())
        .then(data => {
          if (data.status === 'ok') {
            this.setState({ news: data.articles });
          } else throw new Error(data.message);
        })
        .catch(console.log)
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
  render() {
    const { news, isLoading } = this.state;
    return (
      <>
        {isLoading && <>Loading...</>}
        {news &&
          news.map(el => {
            return <li key={el.url}>{el.title}</li>;
          })}
      </>
    );
  }
}

export default ContentInfo;
