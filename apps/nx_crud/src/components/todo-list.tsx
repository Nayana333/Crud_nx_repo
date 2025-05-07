import { Card, Typography, Input, Button, List, Tooltip, Empty, Radio, Badge, Divider } from 'antd'
import { UndoOutlined, DeleteOutlined ,SaveOutlined,EditOutlined } from "@ant-design/icons"
import '../libs/todo_styles.scss';

const TodoList = () => {
  return (
    <Card title={<Typography.Title level={2} className="todo-title">Todo List</Typography.Title>} className="todo-card">
      <div className="todo-input-wrapper">
        <Input  className="todo-input" />
        <Button type="primary">Add</Button>
      </div>
{/* removed group at todo item class */}
      <List
  renderItem={() => (
    <List.Item className="todo-item "> 
      <div className="flex-1 flex items-center gap-2">
        <Tooltip title="Complete / Undo">
          <Button type="text" icon={<UndoOutlined />} style={{ color: "#bfbfbf" }} />
        </Tooltip>

        <Typography.Text className="todo-text">Sample Todo</Typography.Text>

        <Input defaultValue="Sample Todo" className="todo-edit-input" style={{ display: 'none', width: 200 }} />

        <Tooltip title="Edit">
          <Button type="text" icon={<EditOutlined />} />
        </Tooltip>

        <Tooltip title="Save">
          <Button type="text" icon={<SaveOutlined />} />
        </Tooltip>

        <Tooltip title="Delete">
          <Button type="text" danger icon={<DeleteOutlined />} className="opacity-transition" />
        </Tooltip>
      </div>
    </List.Item>
  )}
  locale={{ emptyText: <Empty description="No todos found" image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}
/>


      <Divider style={{ borderColor: "#303030" }} />

      <div className="todo-footer">
        <Badge showZero color="#1890ff">
          <Typography.Text style={{ color: "#bfbfbf" }}>Items left</Typography.Text>
        </Badge>

        <Button danger type="text">Clear Completed</Button>
      </div>
    </Card>
  )
}

export default TodoList
