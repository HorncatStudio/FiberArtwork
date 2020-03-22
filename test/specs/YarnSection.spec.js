import { mount } from '@vue/test-utils'
import test from 'ava'
import YarnSection from '@/components/YarnSection.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(YarnSection)
  t.is(wrapper.isVueInstance(), true)
})
