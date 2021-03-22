import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'
import {SwiperOptions} from 'swiper'

import {ISwiperList} from '@/typings/state'

@Component
export default class Modal extends Vue {
  private id: string = 'mySwiper'
  private len: number = 4
  private list: ISwiperList = [
    {title: 'swiper 1', backgroundColor: 'rgb(20, 106, 144)'},
    {title: 'swiper 2', backgroundColor: '#cb3837'},
    {title: 'swiper 3', backgroundColor: 'rgb(120, 33, 117)'},
    {title: 'swiper 4', backgroundColor: 'rgb(41, 0, 138)'},
    {title: 'swiper 5', backgroundColor: 'rgb(158, 119, 0)'},
    {title: 'swiper 6', backgroundColor: 'rgb(20, 106, 144)'},
    {title: 'swiper 7', backgroundColor: '#cb3837'},
    {title: 'swiper 8', backgroundColor: 'rgb(120, 33, 117)'},
  ]

  private swiperOption: SwiperOptions = {
    width: 1020,
    slidesPerView: 4,
    spaceBetween: 30,
    // loop: this.list.length > 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    lazy: {
      loadPrevNext: true
    },
  }

  get more() {
    return this.list.length > this.len
  }

  render(h: CreateElement): VNode {
    const directives = [
      {name: 'swiper', arg: 'mySwiper', value: this.swiperOption}
    ]

    return (
        <div id={this.id} class="my_swiper">
          <div class="slide-bx" {...{directives}}>
            <div class="swiper-wrapper">
              {this.list.map((item, index) => (
                  <div class="swiper-slide" style={`background-color:${item.backgroundColor}`}>
                    <div class="swiper-item">{item.title}</div>
                  </div>
              ))}
            </div>
          </div>
          {this.more && <button class="swiper-button-next"><span class="screen-out">다음</span></button>}
          {this.more && <button class="swiper-button-prev"><span class="screen-out">이전</span></button>}
        </div>
    )
  }
}
