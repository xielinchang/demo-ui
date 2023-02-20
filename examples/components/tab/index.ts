import { withInstall } from '../../assets/utils/install';
import Tab from './src/TabBar.vue';
import TabItem from './src/TabItem.vue';

export const jTab = withInstall(Tab); // 增加类型
export const jTabItem = withInstall(TabItem);
export default jTab;
