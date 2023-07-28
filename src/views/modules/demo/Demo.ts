import { Vue, Options } from 'vue-class-component';
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'
import { h } from 'vue'

type PersonInfo = {
  date: string;
  name: string;
  address: string;
}

type TableData = PersonInfo[] | []

@Options({
  mounted() {
    // console.log('demo mounted')
    axios.get('/api/demo')
      .then((res) => {
        this.tableData = res.data.data
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  watch: {
    filterData: {
      handler() {
        // console.log('tableData changed')
        this.pagination.total = this.filterData.length
      },
      deep: true
    },
    pagination: {
      handler() {
        // console.log('pagination changed')
      },
      deep: true
    }
  }
})
export default class Demo extends Vue{
  tableData: TableData = []
  queryDateDuration = false
  isFilter = false
  addWindowShouldRender = false
  dateSortInOrder = true
  pagination = {
    currentPage: 1,
    pageSize: 10,
    total: this.filterData.length
  }
  form = {
    date: '',
    name: '',
    address: '',
    startDate: '',
    endDate: ''
  }
  addForm: PersonInfo = {
    date: '',
    name: '',
    address: ''
  }
  deleteForm: PersonInfo | null = null
  handleSizeChange(val:number) {
    this.pagination.pageSize = val
  }
  handleCurrentChange(val:number) {
    this.pagination.currentPage = val
  }
  sortTableData(){
    this.dateSortInOrder = !this.dateSortInOrder
    this.tableData = this.tableData.sort(
      (a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return this.dateSortInOrder ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime()
      }
    )
  }
  filterByQuery() {
    // console.log(this.form)
    const { date, name, address, startDate, endDate } = this.form
    const filterData =  this.tableData.filter((item) => {
      if(name && !item.name.match(name)) return false
      if(address && !item.address.match(address)) return false
      if(this.queryDateDuration){
        if(startDate && endDate){
          if(item.date >= startDate && item.date <= endDate) return true
          return false
        }
      }else{
        if(date && !item.date.match(date)) return false
      }
      return true
    })
    // console.log(this.filterData)
    return filterData
  }
  openAdd(){
    this.addWindowShouldRender = true
  }
  handleCloseAddWindow() {
    this.addForm = {
      date: '',
      name: '',
      address: ''
    }
    this.addWindowShouldRender = false
  }
  handleAddPerson(){
    let { date, name, address } = this.addForm
    if(!date || !name || !address){
      ElMessage({
        message: '请填写完整信息',
        type: 'warning'
      })
      return
    }
    (date as string) = this.handleDateFormate(date)
    this.tableData = [
      {date, name, address},
      ...this.tableData,
    ]
    this.handleCloseAddWindow()
  }
  handleRowClick(row: PersonInfo){
    console.log(row)
    this.deleteForm = {
      date: row.date,
      name: row.name,
      address: row.address
    }
  }
  handleDelete(){
    if(!this.deleteForm) return
    const { date, name, address } = this.deleteForm
    this.tableData = this.tableData.filter((item) => {
      if(item.date === date && item.name === name && item.address === address) return false
      return true
    })
  }
  private handleDateFormate(date:string) {
    let dateArr = new Date(date)
    let year = dateArr.getFullYear()
    let month: number | string = dateArr.getMonth() + 1
    let day: number | string = dateArr.getDate()
    month = month < 10 ? `0${month}` : month
    day = day < 10 ? `0${day}` : day
    return `${year}-${month}-${day}`
  }
  get formDate() {
    return this.form.date
  }
  set formDate(value) {
    this.form.date = this.handleDateFormate(value)
  }
  get formStartDate() {
    return this.form.startDate
  }
  set formStartDate(value) {
    this.form.startDate = this.handleDateFormate(value)
  }
  get formEndDate() {
    return this.form.endDate
  }
  set formEndDate(value) {
    this.form.endDate = this.handleDateFormate(value)
  }
  get filterData() {
    if(this.isFilter){
      return this.filterByQuery()
    }else{
      return this.tableData
    }
  }
  set filterData(value) {
    this.tableData = value
  }
  get switcherState(){
    return this.isFilter
  }
  set switcherState(state){
    if(state){
      this.isFilter = true
    }else{
      this.form = {
        date: '',
        name: '',
        address: '',
        startDate: '',
        endDate: ''
      }
      this.isFilter = false
    }
  }
  get currentPageData() {
    const start = (this.pagination.currentPage - 1) * this.pagination.pageSize
    const end = start + this.pagination.pageSize
    return this.filterData.slice(start, end)
  }
}