import { Component } from 'react';
import Header from './Header/Header';
// import Counter from './Counter/Counter';
import Modal from './Modal/Modal';
// import ToDoList from './ToDoList/ToDoList';
import FormLogin from './FormLogin/FormLogin';
// import FormRegistration from './FormRegistration/FormRegistration';

class App extends Component {
  state = {
    isModalShow: false,
    user: null,
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

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
        <Header showModal={this.showModal} />
        {/* <Counter /> */}
        {this.state.isModalShow && (
          <Modal closeModal={this.closeModal}>
            <FormLogin createUser={this.createUser} />
          </Modal>
        )}
        {/* <ToDoList /> */}
      </div>
    );
  }
}

export default App;
