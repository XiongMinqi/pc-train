<template>
  <div>
    <div class="calendar">
      <FullCalendar :plugins="calendarPlugins" :all-day-slot="false" :header="{
      left: 'today',
      right:''
      }" :slot-event-overlap="false" :events="event" :button-text="{
      today: '今天'
      }"
      columnHeaderFormat="ddd"
      :unselect-auto="false" :select-overlap="false"
      :first-day="nowDay" 
      first-hour:10 :select-allow="handlerSeelctAllow" select-mirror="true"
      min-time="00:00:00" 
      max-time="24:00:00" 
      selectable="true"
      slot-duration="00:30" 
      slot-label-format="HH:mm" 
      default-view="timeGridWeek"
      locale="zh-cn"
      @dateClick="handleDateClick" @eventClick="handleEventClick"
      @select="handleSelect" @eventDrop="handDrop" />
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import momentPlugin from "@fullcalendar/moment";
import "@fullcalendar/core/locales/zh-cn";
import timeGridPlulgin from "@fullcalendar/timegrid";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlulgin,
        momentPlugin,
        interactionPlugin,
      ],
      handlerSeelctAllow: (info) => {
        const currentDate = new Date();
        const start = info.start;
        const end = info.end;
        return start <= end && start >= currentDate;
      },
      event: [
        {
          start: "2019-11-20 14:00:00",
          end: "2019-11-20 16:00:00",
        },
        {
          start: "2019-11-22 12:00:00",
          end: "2019-11-22 14:00:00",
        },
      ],
      views: {
        basicWeek: {
          // name of the view
          columnFormat: "ddd", //这个上方修改自己想要的格式
        },
      },
    };
  },
  computed: {
    nowDay() {
      //使得日历是当前时间的后七天
      return new Date().getDay();
    },
  },
  methods: {
    // 当点击时候
    handleDateClick(arg) {},
    formatTime(t) {
      let a = new Date(t).toJSON();
      let b = new Date(+new Date(a) + 8 * 3600 * 1000);
      let c = b.toISOString();
      let d = c.replace(/T/g, " ").replace(/\.[\d]{3}Z/, "");
      return d;
    },
    handleEventClick(val) {
      console.log(1111, val);
    },
    handDrop(val) {
      console.log(1, val);
    },
    // 当选择结束的时候获取开始和结束时间
    handleSelect(info) {
      this.$confirm("是否选择该时间段为预约时间?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!",
          });
          // console.log('开始' + this.formatTime(info.startStr) + ' 结束 ' + this.formatTime(info.endStr))
          let a = {
            start: this.formatTime(info.startStr),
            end: this.formatTime(info.endStr),
          };
          this.event = this.event.concat(a);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消操作",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
</style>
