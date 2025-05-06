import { Card, Typography, Input, Button, List, Tooltip, Empty, Radio, Badge, Divider } from 'antd'
import React from 'react'
import { UndoOutlined, DeleteOutlined } from "@ant-design/icons"
import '../libs/todo_styles.scss';

const TodoList = () => {
  return (
    <Card title={<Typography.Title level={2} className="todo-title">Todo List</Typography.Title>} className="todo-card">
      <div className="todo-input-wrapper">
        <Input placeholder="What needs to be done?" className="todo-input" />
        <Button type="primary">Add</Button>
      </div>

      <List
        renderItem={() => (
          <List.Item className="todo-item group">
            <div className="flex-1 flex items-center">
              <Tooltip>
                <Button type="text" icon={<UndoOutlined />} style={{ color: "#bfbfbf" }} />
              </Tooltip>
              <Typography.Text className="todo-text">Sample Todo</Typography.Text>
            </div>
            <Tooltip title="Delete">
              <Button type="text" danger icon={<DeleteOutlined />} className="opacity-transition" />
            </Tooltip>
          </List.Item>
        )}
        locale={{ emptyText: <Empty description="No todos found" image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}
      />

      <Divider style={{ borderColor: "#303030" }} />

      <div className="todo-footer">
        <Badge showZero color="#1890ff">
          <Typography.Text style={{ color: "#bfbfbf" }}>Items left</Typography.Text>
        </Badge>

        <Radio.Group optionType="button" buttonStyle="solid">
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="active">Active</Radio.Button>
          <Radio.Button value="completed">Completed</Radio.Button>
        </Radio.Group>

        <Button danger type="text">Clear Completed</Button>
      </div>
    </Card>
  )
}

export default TodoList
