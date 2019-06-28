<template>
  <div id="loginBox">
    <el-row :gutter="10" type="flex" class="row-bg" justify="center" align="middle">
      <!-- 在不同屏幕大小下所占大小 满24-->
      <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
        <!-- 控制的是form表单的最外侧边框 -->
        <div class="grid-content bg-purple-light">
          <el-form ref="Form" :model="form" label-width="80px" label-position="top" :rules="rules">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit('Form')">登录</el-button>
              <el-button @click="resetForm('Form')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
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
    onSubmit(Form) {
      console.log("submit!");
      //   this.$refs[Form]拿到form表单，通过validate方法进行表单登录校验
      // validate函数的参数是一个函数，该函数的参数形参valid是拿到的表单内容
      this.$refs[Form].validate(valid => {
        if (valid) {
          //   发送ajax请求，
          axios({
            url: "http://localhost:8888/api/private/v1/login",
            method: "post",
            data: this.form
          }).then(res => {
            console.log(res);
            if(res.request.status===200){
              // 如果拿到返回数据，把taken令牌保存到localStory
              localStorage.setItem('token',res.data.data.token)
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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

