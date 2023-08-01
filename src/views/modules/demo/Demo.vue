<template>
  <div class="container">
    <div class="query">
        <el-row :gutter="10">
          <el-col :span="5">
            <el-select v-model="queryDateDuration" size="default" placeholder="请选择时间段">
              <el-option
                v-for="(item,idx) in ['查询时间期间','查询具体日期']"
                :key="idx"
                :label="item"
                :value="item==='查询时间期间'"
                ></el-option>
            </el-select>
          </el-col>
          <el-col :span="8" v-if="queryDateDuration">
            <el-date-picker
              v-model="formStartDate"
              type="date"
              placeholder="选择开始日期"
              ></el-date-picker>
          </el-col>
          <el-col :span="8" v-if="queryDateDuration">
            <el-date-picker
              v-model="formEndDate"
              type="date"
              placeholder="选择结束日期"
              ></el-date-picker>
          </el-col>
          <el-col :span="16" v-else>
            <el-date-picker
              v-model="formDate"
              type="date"
              placeholder="选择日期"
              ></el-date-picker>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="5">
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.address" placeholder="请输入地址"></el-input>
          </el-col>
          <el-col :span="7"></el-col>
          <el-col :span="4" :offset="4">
            <el-switch
              v-model="switcherState"
              size="large"
              active-text="筛选"
              inactive-text="默认"
            />
          </el-col>
        </el-row>
    </div>
    <div class="form">
      <el-row :gutter="10">
        <el-col :span="2">
          <el-button type="primary" @click="openAdd">新增</el-button>
        </el-col>
        <el-col :span="2">
          <el-button
            type="primary"
            :disabled="currentRow === null"
            @click="handleDelete"
            >删除</el-button>
        </el-col>
        <el-col :span="2">
          <el-button
            type="primary"
            :disabled="currentRow === null"
            @click="handleEdit"
            >修改</el-button>
        </el-col>
      </el-row>
      <el-table
        v-if="tableData" 
        :data="currentPageData" 
        border
        highlight-current-row
        style="width: 100%"
        @row-click="handleRowClick"
        >
        <el-table-column
          v-for="(item,idx) in ['date','name','address']" 
          :key="idx"
          :prop="item"
          :label="item"
          >
        <template #header v-if="item==='date'">
          <div class="ctn-header">
            <el-text>date</el-text>
            <el-button  style="border:0;" @click="sortTableData">
              <el-icon><Sort /></el-icon>
            </el-button>
          </div>
        </template>
        </el-table-column> 
      </el-table>
      <el-pagination
        v-if="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
        style="margin: 20px 0 50px 0;display: flex;justify-content: center;"
        >
      </el-pagination>
    </div>
    <el-dialog v-model="addWindowShouldRender" class="dialog" title="新增人员信息">
      <el-form :model="addForm" >
        <el-form-item label="姓名" >
          <el-input v-model="addForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="地址" >
          <el-input v-model="addForm.address" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="日期" >
          <el-date-picker
            v-model="addForm.date"
            type="date"
            placeholder="选择日期"
            ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="handleCloseAddWindow">取消</el-button>
          <el-button type="primary" @click="handleAddPerson">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog v-model="editWindowShouldRender" class="dialog" title="修改人员信息">
      <el-form :model="editForm" >
        <el-form-item label="姓名" >
          <el-input v-model="editForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="地址" >
          <el-input v-model="editForm.address" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="日期" >
          <el-date-picker
            v-model="editForm.date"
            type="date"
            placeholder="选择日期"
            ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="handleCloseEditWindow">取消</el-button>
          <el-button type="primary" @click="handleEditPerson">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts" src="./Demo.ts"></script>

<style scoped lang="scss">
.ctn-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & el-button{
    width:auto;
  }
}
.container {
  display:flex;
  flex-direction: column;
  justify-content: start;
}
.el-col {
  margin: 10px 0;
}
.el-dialog {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>