import {
  Card,
  Typography,
  Input,
  Button,
  List,
  Tooltip,
  Empty,
  Badge,
  Divider,
  message
} from 'antd';
import {
  UndoOutlined,
  DeleteOutlined,
  SaveOutlined,
  EditOutlined,
} from '@ant-design/icons';
import '../libs/todo_styles.scss';
import { todoActions } from '../redux/actions/todo.actions';
import { Todo } from '../redux/todo.types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/rootReducers';
import { useState ,useEffect} from 'react';
import { AppDispatch } from '../redux/store/store';

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todoReducer.todos);
   
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  const [filter, _setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  const handleAddTodo = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      const newTodo = {
        id: Date.now(),
        text: trimmed,
        completed: false,
      };
      dispatch(todoActions.addTodo(newTodo));
      setInputValue('');
    }
  };

  const handleToggle = (id: number) => {
    dispatch(todoActions.toggleTodo(id));
  };

  const handleDelete = (id: number) => {
    dispatch(todoActions.removeTodo(id));
  };

  const handleClearCompleted = () => {
    todos
      .filter((todo) => todo.completed)
      .forEach((todo) => dispatch(todoActions.removeTodo(todo.id)));
  };

  const handleEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const handleSave = (id: number) => {
    if (editingText.trim()) {
      dispatch(todoActions.editTodo(id, editingText.trim()));
    }
    setEditingId(null);
    setEditingText('');
  };

  const {loading, error } = useSelector((state: RootState) => state.todoReducer);


useEffect(() => {
  console.log('tod',todos,loading,error);
  
  if (loading) {
    message.loading({ content: 'Processing...', key: 'todo' });
  } else if (error) {
    message.error({ content: error, key: 'todo', duration: 2 });
  } else {
    message.success({ content: 'Action successful!', key: 'todo', duration: 2 });
  }
}, [loading, error]);



  return (
    <Card
      title={
        <Typography.Title level={2} className="todo-title">
          Todo List
        </Typography.Title>
      }
      className="todo-card"
    >
      <div className="todo-input-wrapper">
        <Input
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleAddTodo}
        />
        <Button type="primary" onClick={handleAddTodo}>
          Add
        </Button>
      </div>

      <List
        dataSource={filteredTodos}
        renderItem={(todo) => (
          <List.Item className="todo-item">
            <div className="action_icon">
              <Tooltip title={todo.completed ? 'Undo' : 'Complete'}>
                <Button
                  type="text"
                  icon={<UndoOutlined />}
                  style={{ color: '#bfbfbf' }}
                  onClick={() => handleToggle(todo.id)}
                />
              </Tooltip>

              {editingId === todo.id ? (
                <Input
                  className="todo-edit-input"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onPressEnter={() => handleSave(todo.id)}
                />
              ) : (
                <Typography.Text
                  className="todo-text"
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#8c8c8c' : '#ffffff',
                  }}
                >
                  {todo.text}
                </Typography.Text>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {editingId === todo.id ? (
                <Tooltip title="Save">
                  <Button
                    type="text"
                    icon={<SaveOutlined />}
                    onClick={() => handleSave(todo.id)}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Edit">
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(todo)}
                  />
                </Tooltip>
              )}

              <Tooltip title="Delete">
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(todo.id)}
                />
              </Tooltip>
            </div>
          </List.Item>
        )}
        locale={{
          emptyText: (
            <Empty
              description="No todos found"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
      />

      <Divider style={{ borderColor: '#303030' }} />

      <div
        className="todo-footer"
      >
        <div className='items_left_badge'>
    <Badge count={activeTodosCount} showZero color="#1890ff" />
    <Typography.Text style={{marginLeft:'4px',color: '#bfbfbf'}}>
      Items left
    </Typography.Text>
  </div>

        <Button danger type="text" onClick={handleClearCompleted}>
          Clear Completed
        </Button>
      </div>
    </Card>
  );
};

export default TodoList;
