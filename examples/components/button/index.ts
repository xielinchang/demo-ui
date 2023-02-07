import { withInstall } from '../../assets/utils/install';
import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';

export const JButton = withInstall(Button); // 增加类型
export const JButtonGroup = withInstall(ButtonGroup);
export default JButton;
