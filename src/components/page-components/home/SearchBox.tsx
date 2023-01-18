import { Form, Input, Button, Spin } from 'antd';
import { Box, Heading } from '~/components/common';

export function SearchBox() {
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleSubmit = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <>
      <Form
        name='search-form'
        onFinish={handleSubmit}
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
    </>
  );
}
