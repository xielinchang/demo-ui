// 创建命名空间 自动化类名创建  在写vue时不需再注意类名
export function createNamespace(name: string) {
  // 类名展定为以j开头
  const namespace = `j-${name}`;
  // 以BEM规范创建类名  返回一个创建函数  调用createBEM创建类名
  const createBEM = (suffix?: string): string => {
    // 没传参返回前缀suffix就行
    if (!suffix) return namespace;
    // 判断传参的是下级元素(--)还是修饰符(__)
    return suffix.startsWith('--') ? `${namespace}${suffix}` : `${namespace}__${suffix}`;
  };
  return {
    createBEM,
  };
}
