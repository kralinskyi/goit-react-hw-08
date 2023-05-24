import { Component } from 'react';
import Header from './Header/Header';
// import Counter from './Counter/Counter';
import Modal from './Modal/Modal';
// import ToDoList from './ToDoList/ToDoList';
import FormLogin from './FormLogin/FormLogin';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';

// import FormToDo from './FormToDo/FormToDo';

class App extends Component {
  state = {
    isModalShow: false,
    user: null,
    searchText: '',
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  closeModal = () => {
    this.setState({ isModalShow: false });
  };

  createUser = data => {
    console.log(data);
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
        <Header showModal={this.showModal} />
        {/* <Counter /> */}
        {this.state.isModalShow && (
          <Modal closeModal={this.closeModal}>
            <FormLogin
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )}
        {/* <ToDoList /> */}
        <Search handleSearch={this.handleSearch} />
        <ContentInfo searchText={this.state.searchText} />
      </div>
    );
  }
}

export default App;
// Today's comment
