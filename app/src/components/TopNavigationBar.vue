<template lang='pug'>
.topnav
  img.logo(src="../images/logo-pink@2x.png")
  input(placeholder="Search Companies")
  .division Or
  a New smartlist
  a Propspect
  a Alert
  a Learn
  img.profile(src="../images/group-copy@2x.png")
  img.group(src="../images/group-10-copy-6@2x.png")
</template>

<script>
export default {};
</script>

<style lang='scss'>
.topnav {
  background-color: #323E75;
  overflow: hidden;

  img {
    width: 50px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  img.profile {
    float: right;
    margin-right: 90px;
  }
  img.group {
    float: right;
    margin-right: 20px;
    background: #FFF;
    border-radius: 50px;
  }
  img.logo {
    float: left;
    margin-left: 90px;
  }
  input {
    float: left;
    width: 250px;
    margin-left: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 14px 16px;
    border-radius: 4px;
    background: #1D264E;
    border-color: #1D264E;
    font-size: 14px;
    color: #FFF;
  }
  a {
    float: left;
    margin-top: 20px;
    text-transform: uppercase;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    color: #f2f2f2;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    &:hover {
      background-color: #ddd;
      color: black;
     border-radius: 10px;
    }

    &.active {
      background-color: #4CAF50;
      color: white;
      border-radius: 10px;
    }
  }

  .division {
    float: left;
    margin-top: 20px;
    padding: 14px 16px;
    text-transform: uppercase;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    color: #FFF;
    margin-left: 20px;
    margin-right: 10px;
  }
}
</style>
