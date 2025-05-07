
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../redux/store/store';
import TodoApp from '../components/todo-list'
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TodoApp/>
    </PersistGate>
  </Provider>
);

export default App;
