<template>
  <el-descriptions title="插槽" :column="1" style="margin-top: 2rem;">
    <el-descriptions-item label="用法">
      <p id="usage">1. {{ `\<parent\>\</parent\>` }}组件中添加{{ `\<slot\>\</slot\>` }} 标签</p>
      <CodeBlock
        :info="[{
          fileName: 'Parent.vue',
          code:`
            <template>
              <div>
                <slot></slot>
              </div>
            </template>
            `
        }]" 
      ></CodeBlock>
      <p>2. 将想要被包裹在{{ `\<parent\>\</paren\>` }} 的组件包在里面</p>
      <CodeBlock
        :info="[{
          fileName: 'App.vue',
          code:`
            <template>
              <Parent>
                <Child></Child>
              </Parent>
            </template>
            `
        }]" 
      ></CodeBlock>
    </el-descriptions-item>
    <el-descriptions-item label="插槽默认值">
      <CodeBlock
        :info="[{
          fileName: 'Parent.vue',
          code:`
            <template>
              <div>
                <slot>
                  默认值 // 如果没有传入值则显示默认值
                </slot>
              </div>
            </template>
            `
        }]" 
      ></CodeBlock>
    </el-descriptions-item>
    <el-descriptions-item label="具名插槽">
      <p>1. {{ `\<parent\>\</parent\>` }}组件中添加{{ `\<slot name=""\>\</slot\>` }} 标签</p>
        <CodeBlock
        :info="[{
          fileName: 'Parent.vue',
          code:`
            <template>
              <div>
                <!-- 未具名的插槽默认具名default -->
                <slot></slot>
                <slot name='first'></slot>
                <slot name='second'></slot>
              </div>
            </template>
            `
        }]" 
      ></CodeBlock>
      <p>2. 将想要被包裹在{{ `\<parent\>\</paren\>` }} 的{{ `\<template #abc\>\</template\>` }}写入 并用#或者v-slot=''具名</p>
      <CodeBlock
      :info="[{
        fileName: 'App.vue',
        code:`
          <template>
            <Parent>
              <!-- 传入的具名子组件将无视顺序直接插入对应插槽 -->
              <template v-solt='second'></template>

              <!-- 未具名的template将插入default -->
              <template></template>
              <template #first></template>
            </Parent>
          </template>
          `
      }]" 
      ></CodeBlock>
    </el-descriptions-item>
    <el-descriptions-item label="插槽传参">
      <p>1.未具名插槽向插入的组件传参</p>
      <CodeBlock
      :info="[{
        fileName: 'Parent.vue',
        code:`
          <template>
            <slot :msg='HelloWorld' :title='abc'>
            </slot>
          </template>
          `
        },
        {
          fileName: 'App.vue',
          code:`
            <template>
              <Parent v-slot='slotProps'>
                <Child :msg='slotProps.msg' :title='slotProps.title'></Child>
              </Parent>
              <!-- slotProps 也可以直接解构 -->
              <Parent v-slot='{msg,title}'>
                <Child :msg='msg' :title='title'></Child>
              </Parent>
            </template>
            `
        }
      ]" 
      ></CodeBlock>
      <p>具名插槽传参</p>
      <CodeBlock
        :info="[{
          fileName: 'Parent.vue',
          code:`
            <template>
              <slot name='first' :msg='HelloWorld' :title='abc'>
              </slot>
              <slot></slot>
            </template>
            `
          },
          {
            fileName: 'App.vue',
            code:`
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
              `
              }
          ]"
      ></CodeBlock>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
import CodeBlock from "@/components/CodeBlock/CodeBlock.vue"; 
import { useRouter } from "vue-router";

const router = useRouter();
</script>