import { withInstall } from '../../assets/utils/install';
import jSideBar from './src/sideBar.vue';
import jSideBarItem from './src/sideBarItem.vue';

export const jTab = withInstall(jSideBar); // 增加类型
export const jTabItem = withInstall(jSideBarItem);
export default jTab;
