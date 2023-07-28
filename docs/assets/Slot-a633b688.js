import{_ as v,r as P,o as n,c as i,F as c,g,t,a as C,e as l,b as e,a7 as N,a6 as b,w as s}from"./index-d501c446.js";import{E as $,a as k}from"./el-descriptions-item-f550ee23.js";import{C as B}from"./CodeBlock.vue_vue_type_style_index_0_scoped_43392a15_lang-1cb6144a.js";const x={class:"container"},A={key:0},E={class:"code-block"};function y(p,d,u,a,r,I){const f=P("highlightjs");return n(),i("div",x,[(n(!0),i(c,null,g(p.info,({title:m,code:_,fileName:h})=>(n(),i(c,null,[m?(n(),i("h1",A,t(m),1)):C("",!0),l("div",E,[l("p",null,t(h),1),e(f,{code:_.replace(/scripts/g,"script"),autodetect:"",class:"code-text"},null,8,["code"])])],64))),256))])}const o=v(B,[["render",y],["__scopeId","data-v-43392a15"]]),D=l("p",{id:"usage"},"1. "+t("<parent></parent>")+"组件中添加"+t("<slot></slot>")+" 标签",-1),V=l("p",null,"2. 将想要被包裹在"+t("<parent></paren>")+" 的组件包在里面",-1),j=l("p",null,"1. "+t("<parent></parent>")+"组件中添加"+t('<slot name=""></slot>')+" 标签",-1),w=l("p",null,"2. 将想要被包裹在"+t("<parent></paren>")+" 的"+t("<template #abc></template>")+"写入 并用#或者v-slot=''具名",-1),F=l("p",null,"1.未具名插槽向插入的组件传参",-1),H=l("p",null,"具名插槽传参",-1),R={__name:"Slot",setup(p){return N(),(d,u)=>{const a=k,r=$;return n(),b(r,{title:"插槽",column:1,style:{"margin-top":"2rem"}},{default:s(()=>[e(a,{label:"用法"},{default:s(()=>[D,e(o,{info:[{fileName:"Parent.vue",code:`
            <template>
              <div>
                <slot></slot>
              </div>
            </template>
            `}]},null,8,["info"]),V,e(o,{info:[{fileName:"App.vue",code:`
            <template>
              <Parent>
                <Child></Child>
              </Parent>
            </template>
            `}]},null,8,["info"])]),_:1}),e(a,{label:"插槽默认值"},{default:s(()=>[e(o,{info:[{fileName:"Parent.vue",code:`
            <template>
              <div>
                <slot>
                  默认值 // 如果没有传入值则显示默认值
                </slot>
              </div>
            </template>
            `}]},null,8,["info"])]),_:1}),e(a,{label:"具名插槽"},{default:s(()=>[j,e(o,{info:[{fileName:"Parent.vue",code:`
            <template>
              <div>
                <!-- 未具名的插槽默认具名default -->
                <slot></slot>
                <slot name='first'></slot>
                <slot name='second'></slot>
              </div>
            </template>
            `}]},null,8,["info"]),w,e(o,{info:[{fileName:"App.vue",code:`
          <template>
            <Parent>
              <!-- 传入的具名子组件将无视顺序直接插入对应插槽 -->
              <template v-solt='second'></template>

              <!-- 未具名的template将插入default -->
              <template></template>
              <template #first></template>
            </Parent>
          </template>
          `}]},null,8,["info"])]),_:1}),e(a,{label:"插槽传参"},{default:s(()=>[F,e(o,{info:[{fileName:"Parent.vue",code:`
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
            `}]},null,8,["info"]),H,e(o,{info:[{fileName:"Parent.vue",code:`
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
              `}]},null,8,["info"])]),_:1})]),_:1})}}};export{R as default};
