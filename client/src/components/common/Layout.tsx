import { Layout, Menu } from 'antd';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const secondPagePath = location.state?.secondPagePath || '/:id';
  return (
    <Layout className='site-layout'>
      <Header
        style={{
          padding: '0 1.25rem',
        }}
      >
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          selectedKeys={id ? ['2'] : ['1']}
          items={[
            {
              key: '1',
              label: 'Home',
              onClick: () =>
                navigate('/', {
                  state: {
                    secondPagePath: secondPagePath,
                  },
                }),
            },
            {
              key: '2',
              label: 'Details',
              onClick: () =>
                navigate(secondPagePath, {
                  state: {
                    secondPagePath: secondPagePath,
                  },
                }),
            },
          ]}
        />
      </Header>
      <Content className='site-layout-background h-full'>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        GitHub Repository Search System ©2023 Created by{' '}
        <a href='https://github.com/RabinThapa1998' target={'_blank'} rel='noreferrer'>
          Rabin Thapa
        </a>
      </Footer>
    </Layout>
  );
};
