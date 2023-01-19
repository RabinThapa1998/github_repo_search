import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Space, Table } from 'antd';
import { useRepoQueryHandler } from '~/components/hooks';
import {
  GithubOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
  BranchesOutlined,
} from '@ant-design/icons';

export function SearchDetailPageComponent() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const ownerName = useMemo(() => searchParams.get('owner'), [searchParams]);

  const { data: repoDetails, isFetching: isSearchDetailsLoading } = useRepoQueryHandler({
    ownerName: ownerName || '',
    repoName: params?.id || '',
  });
  console.log(
    '🚀 ~ file: SearchDetailPageComponents.tsx:21 ~ SearchDetailPageComponent ~ repoDetails',
    repoDetails,
  );

  const columns = [
    {
      title: (
        <Space>
          Owner Name
          <UserOutlined />
        </Space>
      ),

      dataIndex: 'owner_name',
      key: 'owner_name',
      render: (text: string) => (
        <a href={`https://github.com/${ownerName}`} target='_blank' rel='noreferrer'>
          {text}
        </a>
      ),
      width: 100,
    },
    {
      title: (
        <Space>
          Repository Name
          <GithubOutlined />
        </Space>
      ),
      dataIndex: 'repository_name',
      key: 'repository_name',
      render: (text: string) => (
        <a href={`https://github.com/${ownerName}/${params.id}`} target='_blank' rel='noreferrer'>
          {text}
        </a>
      ),
      width: 100,
    },
    {
      title: (
        <Space>
          Number of Open Issues
          <ExclamationCircleOutlined />
        </Space>
      ),

      dataIndex: 'number_of_issues',
      key: 'number_of_issues',
      width: 100,
    },
    {
      title: (
        <Space>
          Default Branch
          <BranchesOutlined />
        </Space>
      ),
      dataIndex: 'default_branch',
      key: 'default_branch',
      width: 100,
    },
  ];
  const tableRowFormatter = () => {
    if (!repoDetails) return undefined;
    return [
      {
        key: repoDetails.id,
        owner_name: repoDetails.owner_name,
        repository_name: repoDetails.repository_name,
        number_of_issues: repoDetails.number_of_issues,
        default_branch: repoDetails.default_branch,
      },
    ];
  };
  const formattedData = useMemo(() => tableRowFormatter(), [repoDetails]);

  return (
    <Table
      dataSource={formattedData}
      columns={columns}
      loading={isSearchDetailsLoading}
      pagination={false}
      scroll={{ x: 1000 }}
    />
  );
}
