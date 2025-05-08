import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';  
import TodoList from './todo-list';  
import store from '../redux/store/store';  

test('can add a todo', () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  const input = screen.getByRole('textbox');  
  const addButton = screen.getByText('Add');  
  fireEvent.change(input, { target: { value: 'New Todo' } });  
  fireEvent.click(addButton);  

  expect(screen.getByText('New Todo')).toBeInTheDocument(); 
});

test('can delete a todo', () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'To Delete' } });
  fireEvent.click(screen.getByText('Add'));  

  fireEvent.click(screen.getByText('Delete'));  
  expect(screen.queryByText('To Delete')).not.toBeInTheDocument();  
});

test('can edit a todo', () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Edit Me' } });
  fireEvent.click(screen.getByText('Add'));  

  fireEvent.click(screen.getByText('Edit'));  
  const input = screen.getByDisplayValue('Edit Me');  
  fireEvent.change(input, { target: { value: 'Edited Todo' } });  
  fireEvent.click(screen.getByText('Save'));  

  expect(screen.getByText('Edited Todo')).toBeInTheDocument();  
});

test('can mark todo as completed', () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Complete Me' } });
  fireEvent.click(screen.getByText('Add'));  

  const checkbox = screen.getByRole('checkbox');  
  fireEvent.click(checkbox);  

  expect(checkbox).toBeChecked();  
});

