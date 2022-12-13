import { describe, expect, it } from 'vitest';
import { version } from 'vue';
import Hello from '../src/hello.vue';
describe('hello test', async () => {
  const isVue3 = version.startsWith('3.');
  let mount;
  if (isVue3) {
    mount = (await import('@vue/test-utils')).mount;
  } else {
    mount = (await import('@vue/test-utils2')).mount;
  }

  it('hello: import test', async () => {
    const wrapper = mount(Hello, {
      props: {
        name: 'test'
      },
      propsData: {
        name: 'test'
      }
    });
    expect(wrapper.find('span').element.innerHTML).toBe('hello test');
  });
});
