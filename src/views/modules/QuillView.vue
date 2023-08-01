<template>
  <p>quill</p>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="Consistency" name="1">
      <el-table :data="tableData1" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-collapse-item>
    <el-collapse-item title="Consistency" name="2">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-collapse-item>
    <el-collapse-item title="Consistency" name="3">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-collapse-item>
    <el-collapse-item title="Consistency" name="4">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

export default class QuillView extends Vue {
  activeNames = '1'
  tableData1 = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los Angeles',
    },
  ] 
  tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
}
</script>