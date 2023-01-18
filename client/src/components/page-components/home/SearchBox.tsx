import { Form, Input, Button, Spin } from 'antd';
import { Box, Heading } from '~/components/common';
import { useSearchHandler } from '~/components/hooks';

export function SearchBox() {
  const { onQuerySubmit, isFetching, queries } = useSearchHandler();
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Form
        name='search-form'
        initialValues={{
          query: queries.query,
        }}
        onFinish={onQuerySubmit}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        layout='vertical'
      >
        <Box direction='row' component='flex' className='gap-x-5 justify-between items-end '>
          <Form.Item
            label='Enter a repository name'
            name='query'
            className='w-full'
            rules={[{ required: true, message: 'repository name is required!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' type='primary'>
              Search
            </Button>
          </Form.Item>
        </Box>
      </Form>
      {isFetching ? (
        <Box component='flex' className='w-full justify-center'>
          <Spin size='small' />
        </Box>
      ) : null}
    </>
  );
}
