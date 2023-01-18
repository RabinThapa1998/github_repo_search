import {
  StarOutlined,
  ForkOutlined,
  EyeOutlined,
  GithubOutlined,
  UserOutlined,
  FieldTimeOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';

export const columns = [
  {
    title: (
      <Space>
        <span>Repository Name</span>
        <GithubOutlined />
      </Space>
    ),
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: (
      <Space>
        Author
        <UserOutlined />
      </Space>
    ),
    dataIndex: 'author',
    key: 'author',
    width: 100,
  },
  {
    title: (
      <Space>
        Stars
        <StarOutlined />
      </Space>
    ),
    dataIndex: 'number_of_stars',
    key: 'number_of_stars',
    width: 100,
  },
  {
    title: (
      <Space>
        Watchers
        <EyeOutlined />
      </Space>
    ),
    dataIndex: 'watchers',
    key: 'watchers',
    width: 100,
  },
  {
    title: (
      <Space>
        Forks
        <ForkOutlined />
      </Space>
    ),
    dataIndex: 'forks',
    key: 'forks',
    width: 100,
  },
  {
    title: (
      <Space>
        Description
        <FileTextOutlined />
      </Space>
    ),
    dataIndex: 'description',
    key: 'description',
    width: 100,
  },
  {
    title: (
      <Space>
        Last Updated
        <FieldTimeOutlined />
      </Space>
    ),
    dataIndex: 'updated_at',
    key: 'updated_at',
    width: 100,
  },
];
