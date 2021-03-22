import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Modal extends Vue {
  private show: boolean = false

  onClick() {
    this.show = !this.show
  }

  render(h: CreateElement): VNode {
    return (
        <div id="swiperWrap" class="swiper_wrap">

        </div>
    )
  }
}
