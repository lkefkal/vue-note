import{u as p,o as i,Y as m,w as a,f as t,d as o,t as l}from"./index-57ffb944.js";import{E as r,a as d}from"./el-descriptions-item-6631d381.js";import{_ as e}from"./CodeBlock-02c15614.js";const f=o("p",{id:"usage"},"1. "+l("<parent></parent>")+"组件中添加"+l("<slot></slot>")+" 标签",-1),u=o("p",null,"2. 将想要被包裹在"+l("<parent></paren>")+" 的组件包在里面",-1),c=o("p",null,"1. "+l("<parent></parent>")+"组件中添加"+l('<slot name=""></slot>')+" 标签",-1),_=o("p",null,"2. 将想要被包裹在"+l("<parent></paren>")+" 的"+l("<template #abc></template>")+"写入 并用#或者v-slot=''具名",-1),P=o("p",null,"1.未具名插槽向插入的组件传参",-1),v=o("p",null,"具名插槽传参",-1),x={__name:"Slot",setup(h){return p(),(g,N)=>{const s=d,n=r;return i(),m(n,{title:"插槽",column:1,style:{"margin-top":"2rem"}},{default:a(()=>[t(s,{label:"用法"},{default:a(()=>[f,t(e,{info:[{fileName:"Parent.vue",code:`
            <template>
              <div>
                <slot></slot>
              </div>
            </template>
            `}]},null,8,["info"]),u,t(e,{info:[{fileName:"App.vue",code:`
            <template>
              <Parent>
                <Child></Child>
              </Parent>
            </template>
            `}]},null,8,["info"])]),_:1}),t(s,{label:"插槽默认值"},{default:a(()=>[t(e,{info:[{fileName:"Parent.vue",code:`
            <template>
              <div>
                <slot>
                  默认值 // 如果没有传入值则显示默认值
                </slot>
              </div>
            </template>
            `}]},null,8,["info"])]),_:1}),t(s,{label:"具名插槽"},{default:a(()=>[c,t(e,{info:[{fileName:"Parent.vue",code:`
            <template>
              <div>
                <!-- 未具名的插槽默认具名default -->
                <slot></slot>
                <slot name='first'></slot>
                <slot name='second'></slot>
              </div>
            </template>
            `}]},null,8,["info"]),_,t(e,{info:[{fileName:"App.vue",code:`
          <template>
            <Parent>
              <!-- 传入的具名子组件将无视顺序直接插入对应插槽 -->
              <template v-solt='second'></template>

              <!-- 未具名的template将插入default -->
              <template></template>
              <template #first></template>
            </Parent>
          </template>
          `}]},null,8,["info"])]),_:1}),t(s,{label:"插槽传参"},{default:a(()=>[P,t(e,{info:[{fileName:"Parent.vue",code:`
          <template>
            <slot :msg='HelloWorld' :title='abc'>
            </slot>
          </template>
          `},{fileName:"App.vue",code:`
            <template>
              <Parent v-slot='slotProps'>
                <Child :msg='slotProps.msg' :title='slotProps.title'></Child>
              </Parent>
              <!-- slotProps 也可以直接解构 -->
              <Parent v-slot='{msg,title}'>
                <Child :msg='msg' :title='title'></Child>
              </Parent>
            </template>
            `}]},null,8,["info"]),v,t(e,{info:[{fileName:"Parent.vue",code:`
            <template>
              <slot name='first' :msg='HelloWorld' :title='abc'>
              </slot>
              <slot></slot>
            </template>
            `},{fileName:"App.vue",code:`
              <template>
                <Parent>
                  <!-- 未具名的插槽在与具名插槽同时存在时
                    -- 如果要传参，则必须使用v-slot:default或者#default
                    -->
                  <template #default='defaultProps'>
                    {{ defaultProps.msg }}
                    {{ defaultProps.title }}
                  </template>
                  <template v-slot:first='firstProps'>
                    {{ firstProps.msg }}
                    {{ firstProps.title }}
                  </template>
                </Parent>
              </template>
              `}]},null,8,["info"])]),_:1})]),_:1})}}};export{x as default};
