<template lang='pug'>
.footer
  .links
    a Pricing
    a  | 
    a Blog
    a  | 
    a Webinars
    a  | 
    a Events
    a  | 
    a Help Center
    .terms
      a Terms and Conditions
      a  | 
      a Privacy Policy
  .company
    a © Copyright 2019, Intricately, Inc. All Rights Reserved.
    .social-links
      img.social-img(src="../images/linkedin.png")
      img.social-img(src="../images/facebook.png")
      img.social-img(src="../images/twitter.png")

</template>

<script>
export default { };
</script>

<style scoped lang='scss'>
.footer {
  padding-top: 30px;
  padding-left: 90px;
  background-color: #F3F3F3;
}
.links {
  color: #323E75;
}
.company {
  padding-top: 20px;
  padding-bottom: 50px;
  color: #AEAEAE;
}
.terms {
  float: right;
  margin-right: 180px;
}
.social-links {
  float: right;
  margin-right: 180px;
}
.social-img {
  margin-left: 15px;
  width: 30px;
  height: 30px;
}
</style>
