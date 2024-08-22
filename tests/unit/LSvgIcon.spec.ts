import {describe,it,expect} from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";
import LSvgIcon from "../../src/components/LSvgIcon";

describe('SvgIcon component', () => {
    let wrapper: VueWrapper<any>

    it('should render the internal icon', () => {
        wrapper = mount(LSvgIcon, {
            props: {
                icon: 'test-icon',
            }
        })
        expect(wrapper.find('svg').exists()).toBeTruthy()
    })
    it('should render the internal icon', () => {
        wrapper = mount(LSvgIcon, {
            props: {
                icon: 'https://test.com/test-icon.svg',
            }
        })
        expect(wrapper.find('img').exists()).toBeTruthy()
    })
})
