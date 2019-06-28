<template>
  <div id="loginBox">
    <el-row :gutter="10" type="flex" class="row-bg" justify="center" align="middle">
      <!-- 在不同屏幕大小下所占大小 满24-->
      <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
        <!-- 控制的是form表单的最外侧边框 -->
        <div class="grid-content bg-purple-light">
          <el-form ref="Form" :model="form" label-width="80px" label-position="top" :rules="rules">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
              <el-button @click="resetForm('Form')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
        // region: "",
        // date1: "",
        // date2: "",
        // delivery: false,
        // type: [],
        // resource: "",
        // desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 5,
            max: 12,
            message: "长度在 5 到 12 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    resetForm(Form) {
      this.$refs[Form].resetFields();
    }
  }
};
</script>

<style>
.el-col {
  border-radius: 4px;
}

/* 对齐 */
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  padding: 40px 25px;
  background: #e5e9f2;
  border-radius: 8px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #aaa;
}

#loginBox {
  height: 100%;
}
.row-bg {
  height: 100%;
}
</style>

