<template>
 <main class="main">
  <div class="container-fluid">
   <div class="row">
    <div class="card shadow">
     <div class="card-body card-login">
      <div class="login-header-img">
       <img src="/assets/img/Logo-panjang.png" class="img-header">
      </div>
      <div class="container">
       <div class="row login-form">
        <form>
          <label for="userName" class="label-form mb-1">Username</label>
          <input type="text" class="form-control form-login mt-2" id="userName" placeholder="Masukkan Username" required autocomplete="off">

          <label for="password" class="label-form mt-3 mb-1">Password</label>
          <input type="password" class="form-control form-login mt-2" id="password" placeholder="Masukkan Password" required autocomplete="off">

          <br>
       
         
          <div class="d-grid gap-2">
           <button class="btn-login">
Login
           </button>

          </div>
        </form>
       </div>
      </div>
     </div>
    </div>

   </div>
  </div>
 </main>
</template>

<style scoped>

body{
  font-family: "Nunito" !important;
  scroll-behavior: smooth !important;
  background-color: #005c97 !important;
    background-color: -webkit-linear-gradient(to right, #005c97, #363795) !important;
    background-color: linear-gradient(to right, #005c97, #363795) !important;

}

label {
 float: left !important;
 font-weight: bold;
}
.row {
 text-align: center !important;
 justify-content: center !important;
 
}
.card {
 width: 400px !important;
 height: 450px !important;
 position: absolute;
 justify-content: center !important;
 top: 11%;
}

.form-login{
 border-radius: 1rem;
}
.btn-login {
 color: white;
 background-color: #00337C;
 border-radius: 1rem;
 border: none;
 padding: 7px 0px !important;
 margin-top: 1rem;
}

.btn-login:hover{
  color: #00337C;
  background-color: white;
  border: 2px solid #00337C;
  height: 40px;

}

.img-header {
 height: 45px;
 width : auto;
 position: absolute;
 top: 18%;
 left: 27%;
 right: 25%
}

.login-form {
 position: relative;
 top: 35%;
 
}

.form-control{
  border-radius: 10px !important;
  border: 1px solid #00337C;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
}
</style>
