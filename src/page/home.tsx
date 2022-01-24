import {
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
  Menu,
  MenuItem,
} from 'ant-design-vue';
import { defineComponent } from 'vue';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import './home.less';

const Home = () => {
  const onCollapse = (collapsed: boolean, type: string) => {
    console.log(collapsed, type);
  };

  const onBreakpoint = (broken: boolean) => {
    console.log(broken);
  };
  return () => (
    <Layout class="layout">
      <LayoutSider
        class="layout-sider"
        breakpoint="lg"
        collapsed-width="0"
        onCollapse={onCollapse}
        onBreakpoint={onBreakpoint}
      >
        <div class="logo" />
        <Menu theme="dark" mode="inline">
          <MenuItem key="1">
            <UserOutlined />
            <span class="nav-text">nav 1</span>
          </MenuItem>
          <MenuItem key="2">
            <VideoCameraOutlined />
            <span class="nav-text">nav 2</span>
          </MenuItem>
          <MenuItem key="3">
            <UploadOutlined />
            <span class="nav-text">nav 3</span>
          </MenuItem>
          <MenuItem key="4">
            <UploadOutlined />
            <span class="nav-text">nav 4</span>
          </MenuItem>
        </Menu>
      </LayoutSider>
      <Layout>
        <LayoutHeader class="layout-header" />
        <LayoutContent class="layout-content">
          <div class="layout-content-div">content</div>
        </LayoutContent>
        <LayoutFooter style="text-align: center">Ant Design ©2018 Created by Ant UED</LayoutFooter>
      </Layout>
    </Layout>
  );
};

export default defineComponent(Home);
